<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col lg="6">
        <c-table caption="Simple Table" />
      </b-col><!--/.col-->

      <b-col lg="6">
        <c-table
          striped
          caption="Striped Table"
        />
      </b-col><!--/.col-->
    </b-row><!--/.row-->

    <b-row>
      <b-col lg="6">
        <c-table
          small
          caption="Condensed Table"
        />
      </b-col><!--/.col-->

      <b-col lg="6">
        <c-table
          fixed
          bordered
          caption="Bordered Table"
        />
      </b-col><!--/.col-->
    </b-row><!--/.row-->

    <b-row>
      <b-col sm="12">
        <c-table
          hover
          striped
          bordered
          small
          fixed
          caption="Combined All Table"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import cTable from './Table.vue'

export default {
  name      : 'Tables',
  components: { cTable },
}
</script>
