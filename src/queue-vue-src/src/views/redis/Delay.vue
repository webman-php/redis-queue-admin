<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '查看',
              onClick: handleView.bind(null, record),
            },
          ]"
        />
      </template>
    </BasicTable>
    <MessageDetailModal @register="register" :minHeight="200" :width="600" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, h } from 'vue';
  import { BasicColumn, BasicTable, TableAction, useTable } from '/@/components/Table';
  import { Time } from '/@/components/Time';
  import { getApi } from '/@/api/common';
  import { useModal } from '/@/components/Modal';
  import MessageDetailModal from './MessageDetailModal.vue';

  const [register, { openModal }] = useModal();

  const columns: BasicColumn[] = [
    {
      title: '消息',
      dataIndex: 'message',
    },
    {
      title: '延迟',
      dataIndex: 'delay',
      width: '120px',
    },
    {
      title: '创建时间',
      dataIndex: 'time',
      width: '120px',
      customRender: ({ record }) => {
        return h(Time, { value: record.time * 1000 });
      },
    },
    {
      title: '执行时间',
      dataIndex: 'time',
      width: '120px',
      customRender: ({ record }) => {
        return h(Time, { value: (record.time + record.delay) * 1000 });
      },
    },
  ];
  export default defineComponent({
    components: { BasicTable, TableAction, MessageDetailModal },
    setup() {
      const [registerTable] = useTable({
        columns: columns,
        api: getApi('/app/queue/redis/delay/view'),
        actionColumn: {
          width: 120,
          title: 'Action',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      function handleView(record: Recordable) {
        let detail = [];
        let message = JSON.parse(record.message);
        message.exec_time = new Date((message.time + message.delay) * 1000)
          .toLocaleString()
          .replace(/\//g, '-');
        message.time = new Date(message.time * 1000).toLocaleString().replace(/\//g, '-');
        message.data = JSON.stringify(message.data, null, ' ');
        let map = {
          id: 'id',
          time: '时间',
          delay: '延迟时间',
          exec_time: '预计执行时间',
          attempts: '尝试次数',
          queue: '所属队列',
          data: '参数',
        };
        for (let field in map) {
          detail.push({
            field: map[field] || field,
            value: message[field],
          });
        }
        openModal(true, detail);
      }

      return {
        register,
        registerTable,
        handleView,
      };
    },
  });
</script>

<style>
  td {
    text-align: left !important;
  }
</style>
