<template>
  <div class="overflow-x-auto">
    <div v-if="loading" class="middle px-5 py-20">
      <i class="fa fa-spinner-third text-4xl text-primary animate-spin"></i>
    </div>
    <Table>
      <template #thead>
        <td data-orded>#</td>
        <td class="w-1/4 !text-left">F.I.Sh.</td>
        <td>Tel.raqami</td>
        <td>Homiylik summasi</td>
        <td>Sarflagan summa</td>
        <td>Sana</td>
        <td>Holati</td>
        <td>Amallar</td>
      </template>
      <template #tbody v-if="!loading">
        <tr v-for="(sponsor, index) in sponsors.data" :key="index">
          <td class="px-6" scope="row">
            {{ calculateOrder(index) }}
          </td>
          <td class="!text-left" data-primary :title="sponsor?.full_name">
            <span class="line-clamp-2 font-medium text-15p">
              {{ sponsor?.full_name }}
            </span>
          </td>
          <td class="!w-max">{{ sponsor?.phone }}</td>
          <td>
            <span class="font-medium text-slate-700">
              {{ sponsor?.sum }}
              <span class="text-silver">usz</span>
            </span>
          </td>
          <td>
            <span class="font-medium text-slate-700">
              {{ sponsor?.spent }}
              <span class="text-silver">usz</span>
            </span>
          </td>
          <td>
            <span class="font-medium text-slate-700">
              {{ dayjs(sponsor?.created_at).format('DD.MM.YYYY') }}
            </span>
          </td>
          <td>
            <span class="font-medium" :class="sponsor?.get_status_display">
              {{ sponsor?.get_status_display }}
            </span>
          </td>

          <td>
            <button class="text-xl text-primary">
              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    opacity="0.4"
                    d="M23.855 11.3917C21.5954 6.98292 17.1221 4 12 4C6.87789 4 2.40331 6.985 0.144977 11.3921C0.0496613 11.5806 0 11.7889 0 12.0002C0 12.2115 0.0496613 12.4198 0.144977 12.6083C2.40456 17.0171 6.87789 20 12 20C17.1221 20 21.5966 17.015 23.855 12.6079C23.9503 12.4194 24 12.2111 24 11.9998C24 11.7885 23.9503 11.5802 23.855 11.3917ZM12.0058 18H12C10.4097 17.9992 8.88485 17.3669 7.76077 16.2419C6.63669 15.117 6.00542 13.5917 6.00581 12.0015C6.0062 10.4112 6.6382 8.88618 7.76283 7.76182C8.88746 6.63747 10.4126 6.00583 12.0029 6.00583C13.5932 6.00583 15.1183 6.63747 16.243 7.76182C17.3676 8.88618 17.9996 10.4112 18 12.0015C18.0004 13.5917 17.3691 15.117 16.245 16.2419C15.1209 17.3669 13.5961 17.9992 12.0058 18Z"
                    fill="#3366FF"
                />
                <path
                    d="M15.8608 13.0363C15.7247 13.5433 15.4899 14.0186 15.1698 14.4347C14.8497 14.8509 14.4506 15.1998 13.9955 15.4614C13.5403 15.7231 13.038 15.8924 12.5173 15.9596C11.9966 16.0268 11.4677 15.9906 10.961 15.853C10.4544 15.7155 9.97979 15.4794 9.56452 15.1581C9.14926 14.8368 8.80147 14.4368 8.54107 13.9809C8.28068 13.525 8.11279 13.0222 8.04704 12.5013C7.98129 11.9805 8.01897 11.4517 8.15791 10.9454C8.54194 11.228 9.01453 11.3636 9.48997 11.3277C9.96541 11.2917 10.4122 11.0865 10.7494 10.7494C11.0865 10.4122 11.2917 9.96542 11.3276 9.48998C11.3636 9.01454 11.228 8.54195 10.9454 8.15792C11.6237 7.96431 12.3412 7.95486 13.0243 8.13054C13.7075 8.30621 14.3314 8.66067 14.8321 9.15747C15.3328 9.65426 15.6922 10.2755 15.8732 10.9572C16.0542 11.6389 16.0504 12.3565 15.8621 13.0363H15.8608Z"
                    fill="#3366FF"
                />
              </svg>
            </button>
          </td>
        </tr>
      </template>
    </Table>

    <div class="container">
      <div class="page-size">
        <label for="pageSize">Page Size:</label>
        <select v-model="pageSize" id="pageSize" @change="updatePageSize">
          <option v-for="option in pageSizeOptions" :key="option" :value="option">
            {{ option }}
          </option>
        </select>
      </div>


    </div>

  </div>
</template>

<script setup>
import {useApi} from "@/helpers/axois";
import {onMounted, ref, reactive, watch, computed} from 'vue';
import {useRoute} from "vue-router";
import {useRouter} from "vue-router";
import dayjs from "dayjs";
import Table from '@/components/CTable.vue'

const route = useRoute()
const router = useRouter()

const loading = ref(false)
const pageSizeOptions = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const pageSize = ref(10);
const currentPage = ref(1);

const sponsors = reactive({
  data: [],
  total: 0,
});

async function getSponsors() {
  loading.value = true
  try {
    console.log("try")
    const res = await useApi.get("/sponsor-list")
    sponsors.data = res.results
    console.log("res", sponsors.data)
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}


const fetchData = async () => {
  try {
    const response = await useApi.get(`/sponsor-list/?page=${currentPage.value}&page_size=${pageSize.value}`);
    sponsors.data = response.results;
    sponsors.total = response.count;
    console.log(sponsors.data)
  } catch (error) {
    console.error('Error fetching sponsors:', error);
  }
}
onMounted(() => {
  fetchData()
  extractRouteParams();
})

watch([pageSize, currentPage], () => {
  fetchData();
  updateRoute();
});

const totalPages = computed(() => Math.ceil(sponsors.data.length / pageSize.value));

const pages = computed(() => {
  const range = [];
  for (let i = 1; i <= totalPages.value; i++) {
    range.push(i);
  }
  return range;
});

// Go to the specified page
const goToPage = (page) => {
  currentPage.value = page;
};

// Update the route with the current page and page size parameters
const updateRoute = () => {
  router.push({
    query: {
      page: currentPage.value,
      page_size: pageSize.value,
    },
  });
};

const extractRouteParams = () => {
  const query = route.query;
  if (query.page) {
    currentPage.value = Number(query.page);
  }
  if (query.page_size) {
    pageSize.value = Number(query.page_size);
  }
};

const calculateOrder = (index) => {
  return (currentPage.value - 1) * pageSize.value + index + 1;
};

const updatePageSize = () => {
  currentPage.value = 1;
  fetchData();
  const query = {...route.query, page_size: pageSize.value};
  router.push({query});
};


</script>

<style scoped>

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.pagination button {
  padding: 0.5rem;
  margin: 0 0.2rem;
  border: none;
  background-color: transparent;
  color: #000;
  cursor: pointer;
}

.pagination button.active {
  font-weight: bold;
}

.page-size {
  margin-bottom: 1rem;
}

.page-size label {
  margin-right: 0.5rem;
}

.page-size select {
  padding: 0.5rem;
}

/* Rest of the styles remain the same */
</style>