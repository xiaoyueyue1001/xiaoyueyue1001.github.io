class GameMap {
    width: number;
    height: number;

    constructor(width = 10, height = 10) {
        this.width = width;
        this.height = height;
    }
    // 发卡片顺序
    cardPathCoordinate(cardSize = 2) {
        let x = 0;
        let y = 0;
        do {
            x = Math.floor(Math.random() * this.width);
            y = Math.floor(Math.random() * this.height);
        } while (!this.isEffectiveCoordinate([x, y], cardSize))
        return { x, y }

    }

    // 判断地址是否有效
    isEffectiveCoordinate([x, y]: [number, number], cardSize = 2) {
        return x + cardSize <= this.width && y + cardSize <= this.height
    }

    // 判断是否覆盖了
    isOverlap([x1, y1]: [number, number], [x2, y2]: [number, number], cardSize = 2) {
        return Math.abs(x1 - x2) < cardSize && Math.abs(y1 - y2) < cardSize
    }
}

export default class {
    gameMap: GameMap // 游戏地图
    cardTypeList: cardTypeType[] // 卡片类型列表
    cardTypeNumber: number // 卡片使用的类型数量
    cardNumber: number // 卡片组数（数量为乘以3）
    list: cardType[] // 地图中的卡片
    cacheList: cardType[] // 缓存中的卡片列表
    cardSize: number // 卡片大小

    constructor(width = 10, height = 10) {
        this.cardSize = 2;
        this.gameMap = new GameMap(width, height);
        this.cardTypeList = [
            { id: "9", name: "芭芭拉", imgSrc: require("@/assets/9.png") },
            { id: "13", name: "刻晴", imgSrc: require("@/assets/13.png") },
            { id: "8", name: "菲谢尔", imgSrc: require("@/assets/8.png") },
            { id: "12", name: "可莉", imgSrc: require("@/assets/12.png") },
            { id: "15", name: "莹", imgSrc: require("@/assets/15.png") },
            { id: "7", name: "行秋", imgSrc: require("@/assets/7.png") },
            { id: "2", name: "影", imgSrc: require("@/assets/2.png") },
            { id: "3", name: "巴巴托斯", imgSrc: require("@/assets/3.png") },
            { id: "4", name: "神里绫华", imgSrc: require("@/assets/4.png") },
            { id: "5", name: "八重神子", imgSrc: require("@/assets/5.png") },
            { id: "6", name: "烟绯", imgSrc: require("@/assets/6.png") },
            { id: "10", name: "班尼特", imgSrc: require("@/assets/10.png") },
            { id: "11", name: "珊瑚宫心海", imgSrc: require("@/assets/11.png") },
            { id: "14", name: "七七", imgSrc: require("@/assets/14.png") },
            { id: "15", name: "胡桃", imgSrc: require("@/assets/16.png") },
            { id: "1", name: "钟离", imgSrc: require("@/assets/1.png") },
        ];
        this.cardNumber = 24;
        this.cardTypeNumber = 6;
        this.list = [];
        this.cacheList = [];
        this.initList();
    }
    // 根据配置初始化数据
    initList() {
        let count = 0;
        let list: cardType[] = [];
        // 初始化
        while (count < this.cardNumber) {
            list.push({ id: String(Math.random()), type: this.cardTypeList[count % this.cardTypeNumber], x: 0, y: 0, isTop: true });
            list.push({ id: String(Math.random()), type: this.cardTypeList[count % this.cardTypeNumber], x: 0, y: 0, isTop: true });
            list.push({ id: String(Math.random()), type: this.cardTypeList[count % this.cardTypeNumber], x: 0, y: 0, isTop: true });
            count++
        }
        // 计算坐标
        list.forEach(item => {
            let { x, y } = this.gameMap.cardPathCoordinate(this.cardSize);
            item.x = x;
            item.y = y;
        })
        // 打乱顺序
        this.list = list.sort(() => Math.random() - 0.5);
        this.getRenderList();
        console.log(this.list);
    }
    getRenderList() {
        // 计算层级信息
        let topList: cardType[] = [];
        this.list.forEach(item => {
            topList.forEach(topItem => {
                if (this.gameMap.isOverlap([item.x, item.y], [topItem.x, topItem.y], this.cardSize)) {
                    topItem.isTop = false
                }
            })
            topList = topList.filter(item => item.isTop);
            item.isTop = true;
            topList.push(item);
        })
    }
    removeItem(obj: cardType) {
        if (this.cacheList.length >= 7) {
            return
        }
        let index = this.list.findIndex(item => item.id === obj.id);
        this.list.splice(index, 1);
        let iindex = this.cacheList.findIndex(item => item.type.id === obj.type.id);
        if (iindex === -1) {
            this.cacheList.push(obj);

        } else {
            this.cacheList.splice(iindex, 0, obj);

        }
        this.getRenderList();
        this.updateCacheList();
    }
    updateCacheList() {
        let map = new Map();
        this.cacheList.forEach(item => {
            if (map.get(item.type.id)) {
                map.set(item.type.id, map.get(item.type.id) + 1);
            } else {
                map.set(item.type.id, 1);
            }
        });
        console.log("updateCacheList", map)
        for (let item of map) {
            if (item[1] >= 3) {
                let id = item[0];
                console.log("updateCacheList", id)
                this.cacheList = this.cacheList.filter(iitem => iitem.type.id !== id);
            }
        }
    };
}

type cardTypeType = {
    id: string,
    name: string,
    imgSrc: string
}

export type cardType = {
    id: string,
    x: number,
    y: number,
    type: cardTypeType,
    isTop: boolean,
}