<template>
    <div>
        <header>
            <nav class="navbar navbar-expand-lg bg-secondary">
                <div class="container d-flex justify-content-center">
                    <h1 class="text-light fw-bold">เ ต า อ บ</h1>
                </div>
            </nav>
        </header>
        <div class="container">
            <h3 class="my-3 fw-bold text-secondary">มีเตาอบจำนวน: {{ ovens.length }} เตา</h3>
            <div class="d-flex justify-content-start">
                <button class="btn btn-info my-3 fw-bold" v-on:click="navigateTo('/oven/create/')">สร้างเตาอบ</button>
            </div>
            <div class="row row-cols-2 d-flex justify-content-center fw-bold my-3">
                <table class="table table-bordered table-secondary table-striped">
                    <thead>
                        <tr>
                            <th scope="row">ID</th>
                            <th scope="row">ชื่อเตาอบ</th>
                            <th scope="row">ยี่ห้อ</th>
                            <th scope="row">ราคา</th>
                            <th scope="row">Read/Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody v-for="oven in ovens" v-bind:key="oven.id">
                        <tr>
                            <td>{{ oven.id }}</td>
                            <td>{{ oven.product }}</td>
                            <td>{{ oven.brand }}</td>
                            <td>฿{{ oven.price }}</td>
                            <td>
                                <button class="btn btn-primary" v-on:click="navigateTo('/oven/' + oven.id)">Read</button>
                                <button class="btn btn-success"
                                    v-on:click="navigateTo('/oven/edit/' + oven.id)">Edit</button>
                                <button class="btn btn-danger" v-on:click="deleteOven(oven)">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import OvensService from '@/services/OvensService';
export default {
    data() {
        return {
            ovens: []
        }
    },
    async created() {
        this.ovens = (await OvensService.index()).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
        async deleteOven(oven) {
            let result = confirm("What to delete?")
            if (result) {
                try {
                    await OvensService.delete(oven)
                    this.refreshData()
                } catch (error) {
                    console.log(error)
                }
            }
        },
        async refreshData() {
            this.ovens = (await OvensService.index()).data
        }
    }
}
</script>
<style scoped></style>