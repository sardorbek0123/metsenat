<template>
  <div class="container">
    <table class="w-full max-w-[1200px] mx-auto table font-rubik table-auto border-separate border-spacing-y-3">
      <thead>
      <tr>
        <td data-orded>#</td>
        <th>Full Name</th>
        <th>Phone Number</th>
        <th>Sponsored Money</th>
        <th>Spent Money</th>
        <th>Date</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="sponsor in sponsors" :key="sponsor.id">
        <td>{{ sponsor.id }}</td>
        <td>{{ sponsor.full_name }}</td>
        <td>{{ sponsor.phone }}</td>
        <td>{{ sponsor.sum }}</td>
        <td>{{ sponsor.spent }}</td>
        <td>{{ sponsor.get_status_display }}</td>
        <td>
          <!-- Add your action icon(s) here -->
          <i class="icon-eye" @click="viewSponsor(sponsor)"></i>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import {useApi} from "@/helpers/axois";
import {ref} from "vue";
const sponsors = ref([])

async function getSponsors() {
  try {
    console.log("try")
    const res = await useApi.get("/sponsor-list")
    sponsors.value = res.results

    console.log("res", sponsors.value)
  } catch (error) {
    console.log(error)

  }
}

getSponsors()
</script>
