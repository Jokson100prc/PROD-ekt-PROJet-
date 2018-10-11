window.onload = function (e) {
    const main = document.getElementById("main");
    const ui = document.getElementById("ui");
    const createObject = function () {
        const div = document.createElement('div');
        div.innerHTML = "div";
        return div;
    };
    const staticObjList = {
        objectTypeList: {
            "zamek": {
                1: "zamek-1",
                2: "zamek-2",
                3: "zamek-3",
            },
            "surowce": {
                1: "surowce-1",
                2: "surowce-2",
                3: "surowce-3",
            },
            "droga": {
                1: "droga-1",
                2: "droga-2",
                3: "droga-3",
            },
            "woda": {
                1: "woda-1",
                2: "woda-2",
                3: "woda-3",
            },
            "przeszkoda": {
                1: "przeszkoda-1",
                2: "przeszkoda-2",
                3: "przeszkoda-3",
            },

            "odleglosc": {
                1: "odleglosc-1",
                2: "odleglosc-2",
                3: "odleglosc-3",
            },
        },
        getBoost: function (boost, id) {
            console.log([boost, id]);
            const arr = [];
            for (let i = 0; i < boost; i++) {
                arr.push(id);
            }
            return arr;
        },
        generate: function (collection) {
            return collection[
                Math.floor(
                    Math.random() * (
                        Object.keys(collection).length - 1 + 1
                    )
                ) + 1
            ];
        },
        1: {
            obj: createObject(),
            boost: 2,
            generateType: function () {
                this.obj.classList.add(
                    staticObjList.generate(
                        staticObjList.objectTypeList["zamek"]
                    )
                );
                outerHtml = this.obj.outerHTML;
                this.obj = createObject();
                return outerHtml;
            }
        },
        2: {
            obj: createObject(),
            boost: 100,
            generateType: function () {
                this.obj.classList.add(
                    staticObjList.generate(
                        staticObjList.objectTypeList["przeszkoda"]
                    )
                );
                outerHtml = this.obj.outerHTML;
                this.obj = createObject();
                return outerHtml;
            }
        },
        3: {
            obj: createObject(),
            boost: 100,
            generateType: function () {
                this.obj.classList.add(
                    staticObjList.generate(
                        staticObjList.objectTypeList["droga"]
                    )
                );
                outerHtml = this.obj.outerHTML;
                this.obj = createObject();
                return outerHtml;
            }
        },
        4: {
            obj: createObject(),
            boost: 100,
            generateType: function () {
                this.obj.classList.add(
                    staticObjList.generate(
                        staticObjList.objectTypeList["odleglosc"]
                    )
                );
                outerHtml = this.obj.outerHTML;
                this.obj = createObject();
                return outerHtml;
            }
        },

        // 2: "<div data-static='surowce'>0</div>",
        // 3: "<div data-static='droga'>0</div>",
        // 4: "<div data-static='woda'>0</div>",
        // 5: "<div data-static='przeszkoda'>0</div>",
        // 6: "<div>&nbsp;&nbsp;&nbsp;&nbsp;1</div>",
        // 7: "<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1</div>",
        // 8: "<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1</div>",
    };
    main.innerHTML = "Mapa 1.0";

    ui.onclick = function () {
        staticObjList[1].boost = document.getElementById("zamek").value;
        staticObjList[2].boost = document.getElementById("surowce").value;
        staticObjList[3].boost = document.getElementById("droga").value;
        staticObjList[4].boost = document.getElementById("odleglosc").value;
        i = document.getElementById("ilosc").value;
        let initCollection = [1, 2, 3, 4];
        let idCollection = [1, 2, 3, 4];
        for (id of initCollection) {
            console.log(staticObjList.getBoost(staticObjList[id].boost, id));
            idCollection = idCollection.concat(staticObjList.getBoost(staticObjList[id].boost, id));
        }
        console.log(idCollection);

        n = 4;
        let space = "";


        while (i--) {

            id = idCollection[Math.floor(Math.random() * idCollection.length)];
            staticObj = staticObjList[id];




            space =
                space + staticObj.generateType();
            main.innerHTML = space;
        }
    }
};


$('.start').on('click', function () {
    $('.start, .modal').toggleClass('active');
});

$('.go').on('click', function () {
    $('.go').addClass('move');
});