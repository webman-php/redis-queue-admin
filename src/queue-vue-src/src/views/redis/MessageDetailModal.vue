<template>
  <div class="p-4">
    <BasicModal v-bind="$attrs" destroyOnClose @register="register" title="消息详情">
      <BasicTable
        :columns="columns"
        :data-source="dataSource"
        :pagination="false"
        :bordered="false"
        :show-index-column="false"
      />
    </BasicModal>
  </div>
</template>
<script lang="ts">
  import { defineComponent, h, ref } from 'vue';
  import { BasicTable, BasicColumn } from '/@/components/Table';
  import { BasicModal, useModalInner } from '/@/components/Modal';

  const columns: BasicColumn[] = [
    {
      title: '字段',
      dataIndex: 'field',
      width: 100,
    },
    {
      title: '值',
      dataIndex: 'value',
      customRender: ({ record }) => {
        if (record.field != '参数') {
          return record.value;
        }
        return h('pre', null, record.value);
      },
    },
  ];

  const dataSource = ref([]);

  export default defineComponent({
    components: { BasicTable, BasicModal },
    emits: ['reload', 'register'],
    setup() {
      const [register] = useModalInner((data: any) => {
        dataSource.value = data;
      });

      return {
        register,
        columns,
        dataSource,
      };
    },
  });
</script>

<style scoped>
  td {
    text-align: left !important;
  }
</style>
