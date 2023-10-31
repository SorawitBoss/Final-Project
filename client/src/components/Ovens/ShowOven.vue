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
                <div class="bg-secondary text-light my-3 rounded-3" style="width: 50rem;">
                    <div class="my-3 fw-bold">
                        <h1>ดูเตาอบ</h1>
                        <hr>
                    </div>
                    <div class="text-start p-3">
                        <div class="row">
                            <div class="col-8 mb-3">
                                <label for="product" class="form-label">ชื่อสินค้า</label>
                                <span class="form-control">{{ oven.product }}</span>
                            </div>
                            <div class="col mb-3">
                                <label for="brand" class="form-label">ชื่อแบรนด์</label>
                                <span class="form-control">{{ oven.brand }}</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col mb-3">
                                <label for="price" class="form-label">ราคา</label>
                                <span class="form-control">฿{{ oven.price }}</span>
                            </div>
                            <div class="col mb-3">
                                <label for="weight" class="form-label">น้ำหนัก</label>
                                <span class="form-control">{{ oven.weight }} กก.</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col mb-3">
                                <label for="width" class="form-label">ความกว้าง</label>
                                <span class="form-control">{{ oven.width }} ซม.</span>
                            </div>
                            <div class="col mb-3">
                                <label for="height" class="form-label">ความสูง</label>
                                <span class="form-control">{{ oven.height }} ซม.</span>
                            </div>
                            <div class="col mb-3">
                                <label for="depth" class="form-label">ความลึก</label>
                                <span class="form-control">{{ oven.depth }} ซม.</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col mb-3">
                                <label for="temperature" class="form-label">ปรับอุณหภูมิ</label>
                                <span class="form-control">{{ oven.temperature }}</span>
                            </div>
                            <div class="col-3 mb-3">
                                <label for="capacity" class="form-label">ความจุ</label>
                                <span class="form-control">{{ oven.capacity }} ลิตร</span>
                            </div>
                            <div class="col-3 mb-3">
                                <label for="fire_power" class="form-label">กำลังไฟ</label>
                                <span class="form-control">{{ oven.fire_power }} วัตต์</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col mb-3">
                                <label for="color" class="form-label">สีสินค้า</label>
                                <span class="form-control">{{ oven.color }}</span>
                            </div>
                            <div class="col mb-3">
                                <label for="material" class="form-label">วัสดุหลัก</label>
                                <span class="form-control">{{ oven.material }}</span>
                            </div>
                            <div class="col mb-3">
                                <label for="warranty" class="form-label">รับประกัน</label>
                                <span class="form-control">{{ oven.warranty }} ปี</span>
                            </div>
                        </div>
                        <div class="mb-3">
                            <a @click="$router.back()" class="btn btn-danger">ย้อนกลับ</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import OvensService from '@/services/OvensService';

export default {
    data() {
        return {
            oven: null
        }
    },
    async created() {
        try {
            let ovenId = this.$route.params.ovenId
            this.oven = (await OvensService.show(ovenId)).data
        } catch (error) {
            console.log(error)
        }
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
    }

}
</script>
<style scoped></style>