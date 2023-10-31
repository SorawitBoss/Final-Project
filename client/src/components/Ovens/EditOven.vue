<template>
    <div>
        <header>
            <nav class="navbar navbar-expand-lg bg-secondary">
                <div class="container d-flex justify-content-center">
                    <h1 class="text-light fw-bold">เ ต า อ บ</h1>
                </div>
            </nav>
        </header>
        <div class="container-fluid">
            <div class="d-flex justify-content-center">
                <form v-on:submit.prevent="editOven" class="bg-secondary text-light my-3 rounded-3" style="width: 50rem;">
                    <div class="my-3 fw-bold">
                        <h1>แก้ไขเตาอบ</h1>
                        <hr>
                    </div>
                    <div class="text-start p-3">
                        <div class="row">
                            <div class="col-8 mb-3">
                                <label for="product" class="form-label">ชื่อสินค้า</label>
                                <input type="text" class="form-control" placeholder="กรุณาใส่ชื่อสินค้า" v-model="oven.product">
                            </div>
                            <div class="col mb-3">
                                <label for="brand" class="form-label">ชื่อแบรนด์</label>
                                <input type="text" class="form-control" placeholder="กรุณาใส่ชื่อแบรนด์" v-model="oven.brand">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col mb-3">
                                <label for="price" class="form-label">ราคา</label>
                                <input type="number" class="form-control" placeholder="กรุณาใส่ราคา" v-model="oven.price">
                            </div>
                            <div class="col mb-3">
                                <label for="weight" class="form-label">น้ำหนัก</label>
                                <input type="number" class="form-control" placeholder="กรุณาใส่น้ำหนัก" v-model="oven.weight">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col mb-3">
                                <label for="width" class="form-label">ความกว้าง</label>
                                <input type="number" class="form-control" placeholder="กรุณาใส่ความกว้าง" v-model="oven.width">
                            </div>
                            <div class="col mb-3">
                                <label for="height" class="form-label">ความสูง</label>
                                <input type="number" class="form-control" placeholder="กรุณาใส่ความสูง" v-model="oven.height">
                            </div>
                            <div class="col mb-3">
                                <label for="depth" class="form-label">ความลึก</label>
                                <input type="number" class="form-control" placeholder="กรุณาใส่ความลึก" v-model="oven.depth">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col mb-3">
                                <label for="temperature" class="form-label">ปรับอุณหภูมิ</label>
                                <input type="text" class="form-control" placeholder="กรุณาใส่การปรับอุณหภูมิ" v-model="oven.temperature">
                            </div>
                            <div class="col-3 mb-3">
                                <label for="capacity" class="form-label">ความจุ</label>
                                <input type="number" class="form-control" placeholder="กรุณาใส่ความจุ" v-model="oven.capacity">
                            </div>
                            <div class="col-3 mb-3">
                                <label for="fire_power" class="form-label">กำลังไฟ</label>
                                <input type="number" class="form-control" placeholder="กรุณาใส่กำลังไฟ" v-model="oven.fire_power">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col mb-3">
                                <label for="color" class="form-label">สีสินค้า</label>
                                <input type="text" class="form-control" placeholder="กรุณาใส่สีสินค้า" v-model="oven.color">
                            </div>
                            <div class="col mb-3">
                                <label for="material" class="form-label">วัสดุหลัก</label>
                                <input type="text" class="form-control" placeholder="กรุณาใส่วัสดุหลัก" v-model="oven.material">
                            </div>
                            <div class="col mb-3">
                                <label for="warranty" class="form-label">รับประกัน</label>
                                <input type="number" class="form-control" placeholder="กรุณาใส่รับประกัน" v-model="oven.warranty">
                            </div>
                        </div>
                        <div class="mb-3">
                            <button type="submit" class="btn btn-primary me-2">แก้ไขเตาอบ</button>
                            <a @click="$router.back()" class="btn btn-danger">ย้อนกลับ</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script>
import OvensService from '@/services/OvensService'

export default {
    data() {
        return {
            oven: {
                product: '',
                brand: '',
                price: '',
                width: '',
                height: '',
                depth: '',
                weight: '',
                temperature: '',
                capacity: '',
                fire_power: '',
                color: '',
                material: '',
                warranty: ''
            }
        }
    },
    methods: {
        async editOven() {
            try {
                await OvensService.put(this.oven)
                this.$router.push({
                    name: 'ovens'
                })
            } catch (error) {
                console.log(error)
            }
        }
    },
    async created() {
        try {
            let ovenId = this.$route.params.ovenId
            this.oven = (await OvensService.show(ovenId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
<style scoped></style>