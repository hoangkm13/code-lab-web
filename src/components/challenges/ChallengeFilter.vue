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
                    <input type="checkbox" v-model="fieldValue.status" value="SOLVED" name="SOLVED" >
                    <label for="SOLVED">SOLVED</label>
                  </div>
                  <div>
                    <input type="checkbox" v-model="fieldValue.status" value="UNSOLVED" name="UNSOLVED" >
                    <label for="UNSOLVED">UNSOLVED</label>
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
                  <input type="checkbox" v-model="fieldValue.skill" value="BASIC" name="BASIC"/>
                  <label for="BASIC">BASIC</label>
                </div>
                <div>
                  <input type="checkbox" v-model="fieldValue.skill" value="INTERMEDIATE" name="INTERMEDIATE"/>
                  <label for="INTERMEDIATE">INTERMEDIATE</label>
                </div>
              </div>
            </div>
<!--            <div class="filter-group snipcss0-9-528-584">-->
<!--              <div class="group-label snipcss0-10-584-585">-->
<!--                Difficulty-->
<!--              </div>-->
<!--              <div class="filters snipcss0-10-584-586">-->
<!--                <div>-->
<!--                  <el-checkbox v-model="difficulty" label="VERY EASY" size="large"/>-->
<!--                </div>-->
<!--                <div>-->
<!--                  <el-checkbox v-model="difficulty" label="EASY" size="large"/>-->
<!--                </div>-->
<!--                <div>-->
<!--                  <el-checkbox v-model="difficulty" label="NORMAL" size="large"/>-->
<!--                </div>-->
<!--                <div>-->
<!--                  <el-checkbox v-model="difficulty" label="HARD" size="large"/>-->
<!--                </div>-->
<!--                <div>-->
<!--                  <el-checkbox v-model="difficulty" label="VERY HARD" size="large"/>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="filter-group snipcss0-9-528-616">-->
<!--              <div class="group-label snipcss0-10-616-617">-->
<!--                Subdomains-->
<!--              </div>-->
<!--              <div class="filters snipcss0-10-616-618">-->
<!--                <div>-->
<!--                  <el-checkbox v-model="subDomain" :label="'Introductions'.toUpperCase()" size="large"/>-->
<!--                </div>-->
<!--                <div>-->
<!--                  <el-checkbox v-model="subDomain" :label="'Conditionals and Loop'.toUpperCase()" size="large"/>-->
<!--                </div>-->
<!--                <div>-->
<!--                  <el-checkbox v-model="subDomain" :label="'Arrays and String'.toUpperCase()" size="large"/>-->
<!--                </div>-->
<!--                <div>-->
<!--                  <el-checkbox v-model="subDomain" :label="'Functions'.toUpperCase()" size="large"/>-->
<!--                </div>-->
<!--                <div>-->
<!--                  <el-checkbox v-model="subDomain" :label="'Structs and Enums'.toUpperCase()" size="large"/>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
          </section>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import {ref,watch,defineEmits} from 'vue'
let emits = defineEmits(['filter'])
let fieldValue = ref({
  status: [],
  skill: [],
  difficulty: [],
  subDomain : []
})

watch(fieldValue.value,() => {
  emits('filter',fieldValue.value)

},
    {deep:true}
)
</script>
<style scoped>

</style>
