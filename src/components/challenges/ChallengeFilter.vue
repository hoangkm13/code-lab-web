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
                    <input type="checkbox" v-model="fieldValue.status" value="SOLVED" name="SOLVED">
                    <label for="SOLVED">SOLVED</label>
                  </div>
                  <div>
                    <input type="checkbox" v-model="fieldValue.status" value="UNSOLVED" name="UNSOLVED">
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
            <div class="filter-group snipcss0-9-528-584">
              <div class="group-label snipcss0-10-584-585">
                Difficulty
              </div>
              <div class="filters snipcss0-10-584-586">
                <div>
                  <input type="checkbox" v-model="fieldValue.difficulty" value="VERY_EASY" name="VERY EASY"  />
                  <label for="VERY_EASY">VERY EASY</label>
                </div>
                <div>
                  <input type="checkbox" v-model="fieldValue.difficulty" value="EASY" name="EASY" />
                  <label for="EASY">EASY</label>
                </div>
                <div>
                  <input type="checkbox" v-model="fieldValue.difficulty" value="NORMAL" name="NORMALy"  />
                  <label for="NORMAL">NORMAL</label>
                </div>
                <div>
                  <input type="checkbox" v-model="fieldValue.difficulty" value="HARD" name="HARD"/>
                  <label for="HARD">HARD</label>
                </div>
                <div>
                  <input type="checkbox" v-model="fieldValue.difficulty" value="VERY_HARD" name="VERY_HARD"  />
                  <label for="VERY_HARD">VERY HARD</label>
                </div>
              </div>
            </div>
            <div class="filter-group snipcss0-9-528-616">
              <div class="group-label snipcss0-10-616-617">
                Subdomains
              </div>
              <div class="filters snipcss0-10-616-618">
                <div>
                  <input type="checkbox" v-model="fieldValue.subDomain" value="INTRODUCTION" name="INTRODUCTION"  />
                  <label for="INTRODUCTION">INTRODUCTIONS</label>
                </div>
                <div>
                  <input type="checkbox" v-model="fieldValue.subDomain" value="CONDITIONALS_AND_LOOPS" name="CONDITIONALS_AND_LOOPS" />
                  <label for="CONDITIONALS_AND_LOOPS">CONDITIONALS AND LOOP</label>
                </div>
                <div>
                  <input type="checkbox" v-model="fieldValue.subDomain" value="ARRAYS_AND_STRINGS" name="ARRAYS_AND_STRINGS"  />
                  <label for="ARRAYS_AND_STRINGS">ARRAYS AND STRING</label>
                </div>
                <div>
                  <input type="checkbox" v-model="fieldValue.subDomain" value="FUNCTIONS" name="FUNCTIONS"  />
                  <label for="FUNCTIONS">FUNCTIONS</label>
                </div>
                <div>
                  <input type="checkbox" v-model="fieldValue.subDomain" value="STRUCTS_AND_ENUMS" name="STRUCTS_AND_ENUMS"  />
                  <label for="STRUCTS_AND_ENUMS">STRUCTS AND ENUMS</label>
                </div>
              </div>
            </div>
            <div class="filter-group snipcss0-9-528-584">
              <div class="group-label snipcss0-10-584-585">
                Difficulty
              </div>
              <div class="filters snipcss0-10-584-586">
                <div>
                  <input type="checkbox" v-model="fieldValue.difficulty" value="VERY_EASY" name="VERY EASY"  />
                  <label for="VERY_EASY">VERY EASY</label>
                </div>
                <div>
                  <input type="checkbox" v-model="fieldValue.difficulty" value="EASY" name="EASY" />
                  <label for="EASY">EASY</label>
                </div>
                <div>
                  <input type="checkbox" v-model="fieldValue.difficulty" value="NORMAL" name="NORMALy"  />
                  <label for="NORMAL">NORMAL</label>
                </div>
                <div>
                  <input type="checkbox" v-model="fieldValue.difficulty" value="HARD" name="HARD"/>
                  <label for="HARD">HARD</label>
                </div>
                <div>
                  <input type="checkbox" v-model="fieldValue.difficulty" value="VERY_HARD" name="VERY_HARD"  />
                  <label for="VERY_HARD">VERY HARD</label>
                </div>
              </div>
            </div>
            <div class="filter-group snipcss0-9-528-616">
              <div class="group-label snipcss0-10-616-617">
                Subdomains
              </div>
              <div class="filters snipcss0-10-616-618">
                <div>
                  <input type="checkbox" v-model="fieldValue.subDomain" value="INTRODUCTION" name="INTRODUCTION"  />
                  <label for="INTRODUCTION">INTRODUCTIONS</label>
                </div>
                <div>
                  <input type="checkbox" v-model="fieldValue.subDomain" value="CONDITIONALS_AND_LOOPS" name="CONDITIONALS_AND_LOOPS" />
                  <label for="CONDITIONALS_AND_LOOPS">CONDITIONALS AND LOOP</label>
                </div>
                <div>
                  <input type="checkbox" v-model="fieldValue.subDomain" value="ARRAYS_AND_STRINGS" name="ARRAYS_AND_STRINGS"  />
                  <label for="ARRAYS_AND_STRINGS">ARRAYS AND STRING</label>
                </div>
                <div>
                  <input type="checkbox" v-model="fieldValue.subDomain" value="FUNCTIONS" name="FUNCTIONS"  />
                  <label for="FUNCTIONS">FUNCTIONS</label>
                </div>
                <div>
                  <input type="checkbox" v-model="fieldValue.subDomain" value="STRUCTS_AND_ENUMS" name="STRUCTS_AND_ENUMS"  />
                  <label for="STRUCTS_AND_ENUMS">STRUCTS AND ENUMS</label>
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
import {ref, watch, defineEmits} from 'vue'

let emits = defineEmits(['filter'])
let fieldValue = ref({
  status: [],
  skill: [],
  difficulty: [],
  subDomain: []
})

watch(fieldValue.value, () => {
      emits('filter', fieldValue.value)
    },
    {deep: true}
)
</script>
<style scoped>

</style>
