const mongoose = require("mongoose");
//引入数据模型模块
const navData = require("./model/navSchema");
const categorySchema = require("./model/categorySchema");

const fs = require('fs');
const filePath = "./geekape-20220321215007.json"
mongoose.connect('mongodb://127.0.0.1:27017/navigation', {useNewUrlParser: true, useUnifiedTopology: true});

let datas = null;

class Reptile {
    constructor(type) {
        this.type = type
        this.init()
    }

    async init() {
        let categoryData = {
            name: this.type,
            categoryId: '',
        }
        const categoryDataRes = await categorySchema.create(categoryData)
        this.categoryIds = categoryDataRes._id
        this.start_geekape()
    }

    async start_geekape() {

        for (let i = 0; i < datas.length; i++) {
            const secondCategoryName = datas[i].name;
            const {_id: secondCategoryId} = await categorySchema.create({
                categoryId: this.categoryIds,
                name: secondCategoryName
            })


            const websites = []
            const list = datas[i]["list"];
            for (let j = 0; j < list.length; j++) {
                const name = list[j].name
                const href = list[j].href
                const desc = list[j].desc
                const logo = list[j].logo
                websites.push(navData.create({
                    categoryId: secondCategoryId,
                    name,
                    href,
                    desc,
                    logo,
                }))
            }
            await Promise.all(websites)
        }
        console.log(`${this.type}请求完成`)
    }
}


async function main() {
    fs.readFile(filePath, 'utf-8', async function (err, data) {
        if (err) {
            console.error(`-----=====文件读取失败`)
        } else {
            data = JSON.parse(data)["data"][0];
            datas = data["data"];
        }
    });
    await Promise.all([
        new Reptile('开发'),
        new Reptile('运营'),
        new Reptile('设计'),
        new Reptile('产品'),
        new Reptile('资源下载'),
        new Reptile('计算机'),
        new Reptile('休闲娱乐'),
    ])
}

main()
