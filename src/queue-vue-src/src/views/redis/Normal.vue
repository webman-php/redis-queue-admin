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
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, BasicColumn, TableAction } from '/@/components/Table';
  import { useGo } from '/@/hooks/web/usePage';
  import { getApi } from '/@/api/common';

  const columns: BasicColumn[] = [
    {
      title: '队列',
      dataIndex: 'queue',
    },
    {
      title: '数量',
      dataIndex: 'count',
    },
  ];
  export default defineComponent({
    components: { BasicTable, TableAction },
    setup() {
      const go = useGo();
      const [registerTable] = useTable({
        columns: columns,
        api: getApi('/app/queue/redis/normal'),
        actionColumn: {
          width: 120,
          title: 'Action',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      function handleView(record: Recordable) {
        go('/redis/normal/' + record.queue);
      }

      return {
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
