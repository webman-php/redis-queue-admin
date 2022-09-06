<template>
  <div class="p-4">
    <div class="p-1 breadcrumb">
      <span class="text-secondary"> 消息队列 </span>
    </div>
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

  export default defineComponent({
    components: { BasicTable, TableAction },
    setup() {
      const go = useGo();
      const columns: BasicColumn[] = [
        {
          title: '队列',
          dataIndex: 'queue_type',
        },
      ];
      const [registerTable] = useTable({
        columns: columns,
        api: getApi('/app/queue/redis/view'),
        pagination: false,
        canResize: true,
        actionColumn: {
          width: 120,
          title: 'Action',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      function handleView(record: Recordable) {
        go('/redis/' + record.type);
      }

      return {
        registerTable,
        handleView,
      };
    },
  });
</script>

<style>
  .breadcrumb {
    font-weight: bold;
    font-size: 15px;
  }

  .breadcrumb a {
    color: rgb(0 0 0 / 80%);
  }
</style>
