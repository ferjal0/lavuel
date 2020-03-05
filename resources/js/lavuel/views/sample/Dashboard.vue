<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col
        sm="6"
        md="2"
      >
        <b-card class="text-white bg-info">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-people" />
          </div>
          <div class="h4 mb-0">
            87.500
          </div>
          <small class="text-muted text-uppercase font-weight-bold">
            Visitors
          </small>
          <b-progress
            :value="25"
            height="{}"
            class="progress-white progress-xs mt-3"
          />
        </b-card>
      </b-col>
      <b-col
        sm="6"
        md="2"
      >
        <b-card class="text-white bg-success">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-user-follow" />
          </div>
          <div class="h4 mb-0">
            385
          </div>
          <small class="text-muted text-uppercase font-weight-bold">
            New Clients
          </small>
          <b-progress
            :value="25"
            height="{}"
            class="progress-white progress-xs mt-3"
          />
        </b-card>
      </b-col>
      <b-col
        sm="6"
        md="2"
      >
        <b-card class="text-white bg-warning">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-basket-loaded" />
          </div>
          <div class="h4 mb-0">
            1238
          </div>
          <small class="text-muted text-uppercase font-weight-bold">
            Products sold
          </small>
          <b-progress
            :value="25"
            height="{}"
            class="progress-white progress-xs mt-3"
          />
        </b-card>
      </b-col>
      <b-col
        sm="6"
        md="2"
      >
        <b-card class="text-white bg-primary">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-pie-chart" />
          </div>
          <div class="h4 mb-0">
            28%
          </div>
          <small class="text-muted text-uppercase font-weight-bold">
            Returning Visitors
          </small>
          <b-progress
            :value="25"
            height="{}"
            class="progress-white progress-xs mt-3"
          />
        </b-card>
      </b-col>
      <b-col
        sm="6"
        md="2"
      >
        <b-card class="text-white bg-danger">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-speedometer" />
          </div>
          <div class="h4 mb-0">
            5:34:11
          </div>
          <small class="text-muted text-uppercase font-weight-bold">
            Avg. Time
          </small>
          <b-progress
            :value="25"
            height="{}"
            class="progress-white progress-xs mt-3"
          />
        </b-card>
      </b-col>
      <b-col
        sm="6"
        md="2"
      >
        <b-card class="text-white bg-secondary">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-speech" />
          </div>
          <div class="h4 mb-0">
            972
          </div>
          <small class="text-muted text-uppercase font-weight-bold">
            Comments
          </small>
          <b-progress
            :value="25"
            height="{}"
            class="progress-white progress-xs mt-3"
          />
        </b-card>
      </b-col>
    </b-row><!--/.row-->
    <b-row>
      <b-col
        sm="6"
        md="2"
      >
        <b-card>
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-people" />
          </div>
          <div class="h4 mb-0">
            87.500
          </div>
          <small class="text-muted text-uppercase font-weight-bold">
            Visitors
          </small>
          <b-progress
            :value="25"
            height="{}"
            class="progress-xs mt-3 mb-0"
            variant="info"
          />
        </b-card>
      </b-col>
      <b-col
        sm="6"
        md="2"
      >
        <b-card>
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-user-follow" />
          </div>
          <div class="h4 mb-0">
            385
          </div>
          <small class="text-muted text-uppercase font-weight-bold">
            New Clients
          </small>
          <b-progress
            :value="25"
            height="{}"
            class="progress-xs mt-3 mb-0"
            variant="success"
          />
        </b-card>
      </b-col>
      <b-col
        sm="6"
        md="2"
      >
        <b-card>
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-basket-loaded" />
          </div>
          <div class="h4 mb-0">
            1238
          </div>
          <small class="text-muted text-uppercase font-weight-bold">
            Products sold
          </small>
          <b-progress
            :value="25"
            height="{}"
            class="progress-xs mt-3 mb-0"
            variant="warning"
          />
        </b-card>
      </b-col>
      <b-col
        sm="6"
        md="2"
      >
        <b-card>
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-pie-chart" />
          </div>
          <div class="h4 mb-0">
            28%
          </div>
          <small class="text-muted text-uppercase font-weight-bold">
            Returning Visitors
          </small>
          <b-progress
            :value="25"
            height="{}"
            class="progress-xs mt-3 mb-0"
          />
        </b-card>
      </b-col>
      <b-col
        sm="6"
        md="2"
      >
        <b-card>
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-speedometer" />
          </div>
          <div class="h4 mb-0">
            5:34:11
          </div>
          <small class="text-muted text-uppercase font-weight-bold">
            Avg. Time
          </small>
          <b-progress
            :value="25"
            height="{}"
            class="progress-xs mt-3 mb-0"
            variant="danger"
          />
        </b-card>
      </b-col>
      <b-col
        sm="6"
        md="2"
      >
        <b-card>
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-speech" />
          </div>
          <div class="h4 mb-0">
            972
          </div>
          <small class="text-muted text-uppercase font-weight-bold">
            Comments
          </small>
          <b-progress
            :value="25"
            height="{}"
            class="progress-xs mt-3 mb-0"
            variant="secondary"
          />
        </b-card>
      </b-col>
    </b-row><!--/.row-->
  </div>
</template>

<script>
export default {
  name      : 'Dashboard',
  components: {},
  methods   : {},
}
</script>
