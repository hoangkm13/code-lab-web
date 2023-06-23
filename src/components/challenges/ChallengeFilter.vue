<template>
  <section class="filter-section right-pane snipcss0-4-5-524">
    <div class="sticky-outer-wrapper style-YvjY7" id="style-YvjY7">
      <div class="sticky-inner-wrapper snipcss0-6-525-526 style-qm6H7" id="style-qm6H7">
        <div class="filter-wrap snipcss0-7-526-527">
          <section class="challenge-list-filter snipcss0-8-527-528">
            <div class="filter-group snipcss0-9-528-529">
              <div class="group-label snipcss0-10-529-530">
                Status
              </div>
              <div class="filters snipcss0-10-529-531">
                <div class="ui-checklist snipcss0-11-531-532" role="group">
                  <div>
                    <el-checkbox v-model="checked1" label="Solved" size="large" />
                  </div>
                  <div>
                    <el-checkbox v-model="checked2" label="Unsolved" size="large" />
                  </div>
                </div>
              </div>
            </div>
            <div class="filter-group snipcss0-9-528-552">
              <div class="group-label snipcss0-10-552-553">
                Skills
              </div>
              <div class="filters snipcss0-10-552-554">
                <div>
                  <el-checkbox v-model="checked1" label="Basic" size="large" />
                </div>
                <div>
                  <el-checkbox v-model="checked2" label="Intermediate" size="large" />
                </div>
              </div>
            </div>
            <div class="filter-group snipcss0-9-528-584">
              <div class="group-label snipcss0-10-584-585">
                Difficulty
              </div>
              <div class="filters snipcss0-10-584-586">
                <div>
                  <el-checkbox v-model="checked1" label="Very Easy" size="large" />
                </div>
                <div>
                  <el-checkbox v-model="checked2" label="Easy" size="large" />
                </div>
                <div>
                  <el-checkbox v-model="checked1" label="Normal" size="large" />
                </div>
                <div>
                  <el-checkbox v-model="checked2" label="Hard" size="large" />
                </div>
                <div>
                  <el-checkbox v-model="checked1" label="Very Hard" size="large" />
                </div>
              </div>
            </div>
            <div class="filter-group snipcss0-9-528-616">
              <div class="group-label snipcss0-10-616-617">
                Subdomains
              </div>
              <div class="filters snipcss0-10-616-618">
                <div>
                  <el-checkbox v-model="checked1" label="Introductions" size="large" />
                </div>
                <div>
                  <el-checkbox v-model="checked2" label="Conditionals and Loop" size="large" />
                </div>
                <div>
                  <el-checkbox v-model="checked1" label="Arryas and String" size="large" />
                </div>
                <div>
                  <el-checkbox v-model="checked2" label="Functions" size="large" />
                </div>
                <div>
                  <el-checkbox v-model="checked1" label="Structs and Enums" size="large" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">

</script>
<style scoped>

</style>
