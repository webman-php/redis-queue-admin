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
  import { BasicTable, useTable, BasicColumn, TableAction } from '/@/components/Table';
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
      title: '时间',
      dataIndex: 'time',
      width: '120px',
      customRender: ({ record }) => {
        return h(Time, { value: record.time * 1000 });
      },
    },
  ];
  export default defineComponent({
    components: { BasicTable, TableAction, MessageDetailModal },
    setup() {
      const [registerTable] = useTable({
        columns: columns,
        api: getApi('/app/queue/redis/failed/view'),
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
        message.time = new Date(message.time * 1000).toLocaleString().replace(/\//g, '-');
        message.data = JSON.stringify(message.data, null, ' ');
        let map = {
          time: '时间',
          delay: '延迟时间',
          attempts: '尝试次数',
          queue: '所属队列',
          data: '参数',
          error: '错误信息',
        };
        for (let field in message) {
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
