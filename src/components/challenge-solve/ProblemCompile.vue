<template>
<div class="challenge-compile">
[<code-editor v-model="code"
             :language_selector="true"
             :languages="[['Java', 'jv']]"
             :wrap_code="true"

             >
</code-editor>]
</div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
import CodeEditor from 'simple-code-editor';
let code = ref('')
</script>



<style scoped>

</style>
