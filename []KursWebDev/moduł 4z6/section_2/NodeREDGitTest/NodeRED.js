[{
    "id": "677a0589.3fb8ac",
    "type": "tab",
    "label": "Flow 1",
    "disabled": false,
    "info": ""
}, {
    "id": "b6bf9868.f94358",
    "type": "tab",
    "label": "Flow 2",
    "disabled": false,
    "info": ""
}, {
    "id": "f161ddcb.f5b4",
    "type": "subflow",
    "name": "Subflow 1",
    "info": "",
    "in": [],
    "out": []
}, {
    "id": "c53a846.8f8d778",
    "type": "inject",
    "z": "f161ddcb.f5b4",
    "name": "",
    "topic": "",
    "payload": "",
    "payloadType": "date",
    "repeat": "",
    "crontab": "",
    "once": false,
    "onceDelay": 0.1,
    "x": 109.10000610351562,
    "y": 79,
    "wires": [
        []
    ]
}, {
    "id": "2135a6c6.7033aa",
    "type": "debug",
    "z": "f161ddcb.f5b4",
    "name": "",
    "active": true,
    "tosidebar": true,
    "console": false,
    "tostatus": false,
    "complete": "false",
    "x": 972.0999755859375,
    "y": 112.60000610351562,
    "wires": []
}, {
    "id": "63d6c6d2.13b078",
    "type": "function",
    "z": "f161ddcb.f5b4",
    "name": "",
    "func": "\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 466.1000061035156,
    "y": 141.60000705718994,
    "wires": [
        []
    ]
}, {
    "id": "d53c9e68.aefea",
    "type": "debug",
    "z": "677a0589.3fb8ac",
    "name": "",
    "active": true,
    "tosidebar": true,
    "console": false,
    "tostatus": false,
    "complete": "true",
    "x": 623.1000518798828,
    "y": 124.00000190734863,
    "wires": []
}, {
    "id": "d9a54a4e.a31ba8",
    "type": "debug",
    "z": "677a0589.3fb8ac",
    "name": "",
    "active": true,
    "tosidebar": true,
    "console": false,
    "tostatus": false,
    "complete": "true",
    "x": 705.0000038146973,
    "y": 53.00000190734863,
    "wires": []
}, {
    "id": "5bd02425.4300ec",
    "type": "inject",
    "z": "677a0589.3fb8ac",
    "name": "folder/subfolder/file",
    "topic": "folder/subfolder/file.topic",
    "payload": "folder/subfolder/file.payload",
    "payloadType": "str",
    "repeat": "",
    "crontab": "",
    "once": true,
    "onceDelay": 0.1,
    "x": 124.10000228881836,
    "y": 28.000000953674316,
    "wires": [
        ["d36e1954.e5c648"]
    ]
}, {
    "id": "82145da8.5298a",
    "type": "debug",
    "z": "677a0589.3fb8ac",
    "name": "",
    "active": true,
    "tosidebar": true,
    "console": false,
    "tostatus": false,
    "complete": "true",
    "x": 703.0000114440918,
    "y": 419.00000381469727,
    "wires": []
}, {
    "id": "fdd82d4c.d092d",
    "type": "debug",
    "z": "677a0589.3fb8ac",
    "name": "",
    "active": true,
    "tosidebar": true,
    "console": false,
    "tostatus": false,
    "complete": "true",
    "x": 803.8999557495117,
    "y": 270.00000190734863,
    "wires": []
}, {
    "id": "fbf0e508.7d6388",
    "type": "inject",
    "z": "677a0589.3fb8ac",
    "name": "folder/subfolder/file",
    "topic": "",
    "payload": "folder/subfolder/file.topic",
    "payloadType": "str",
    "repeat": "",
    "crontab": "",
    "once": false,
    "onceDelay": 0.1,
    "x": 540.9999618530273,
    "y": 264.00000190734863,
    "wires": [
        ["fdd82d4c.d092d", "f8bd53fd.3273d"]
    ]
}, {
    "id": "f8bd53fd.3273d",
    "type": "change",
    "z": "677a0589.3fb8ac",
    "name": "",
    "rules": [{
        "t": "set",
        "p": "payload",
        "pt": "msg",
        "to": "",
        "tot": "str"
    }],
    "action": "",
    "property": "",
    "from": "",
    "to": "",
    "reg": false,
    "x": 605.9999923706055,
    "y": 340.1999988555908,
    "wires": [
        ["82145da8.5298a"]
    ]
}, {
    "id": "6a0774d3.2b7ffc",
    "type": "debug",
    "z": "677a0589.3fb8ac",
    "name": "",
    "active": true,
    "tosidebar": true,
    "console": false,
    "tostatus": false,
    "complete": "true",
    "x": 379.00000381469727,
    "y": 595.4000072479248,
    "wires": []
}, {
    "id": "bb5cd5e8.49b268",
    "type": "debug",
    "z": "677a0589.3fb8ac",
    "name": "",
    "active": true,
    "tosidebar": true,
    "console": false,
    "tostatus": false,
    "complete": "true",
    "x": 479.8999481201172,
    "y": 446.4000053405762,
    "wires": []
}, {
    "id": "caf93b3a.7866f8",
    "type": "inject",
    "z": "677a0589.3fb8ac",
    "name": "folder/subfolder/file",
    "topic": "",
    "payload": "folder/subfolder/file.url",
    "payloadType": "str",
    "repeat": "",
    "crontab": "",
    "once": false,
    "onceDelay": 0.1,
    "x": 216.9999542236328,
    "y": 440.4000053405762,
    "wires": [
        ["bb5cd5e8.49b268", "479d8a6d.291b24"]
    ]
}, {
    "id": "479d8a6d.291b24",
    "type": "change",
    "z": "677a0589.3fb8ac",
    "name": "",
    "rules": [{
        "t": "set",
        "p": "payload",
        "pt": "msg",
        "to": "",
        "tot": "str"
    }],
    "action": "",
    "property": "",
    "from": "",
    "to": "",
    "reg": false,
    "x": 281.99998474121094,
    "y": 516.6000022888184,
    "wires": [
        ["6a0774d3.2b7ffc"]
    ]
}, {
    "id": "acf2f94.4288f08",
    "type": "function",
    "z": "677a0589.3fb8ac",
    "name": "",
    "func": "msg.payload= \"I Continue My Journey\"\nmsg.newOne= \"newTwoToo\"\nmsg.number = 999\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 500.1000061035156,
    "y": 43.80000305175781,
    "wires": [
        ["d9a54a4e.a31ba8"]
    ]
}, {
    "id": "d36e1954.e5c648",
    "type": "change",
    "z": "677a0589.3fb8ac",
    "name": "",
    "rules": [{
        "t": "move",
        "p": "topic",
        "pt": "msg",
        "to": "payload",
        "tot": "msg"
    }],
    "action": "",
    "property": "",
    "from": "",
    "to": "",
    "reg": false,
    "x": 369.1000518798828,
    "y": 147.20000076293945,
    "wires": [
        ["d53c9e68.aefea"]
    ]
}, {
    "id": "e4eee379.2c668",
    "type": "inject",
    "z": "b6bf9868.f94358",
    "name": "",
    "topic": "",
    "payload": "Hallo today - the email forrm NodeRED! :D",
    "payloadType": "str",
    "repeat": "2",
    "crontab": "",
    "once": false,
    "onceDelay": 0.1,
    "x": 80.10000610351562,
    "y": 113.00000190734863,
    "wires": [
        ["667bdde9.0eceb4"]
    ]
}, {
    "id": "877fe5aa.d5ef68",
    "type": "debug",
    "z": "b6bf9868.f94358",
    "name": "",
    "active": true,
    "tosidebar": true,
    "console": true,
    "tostatus": false,
    "complete": "true",
    "x": 679.1000595092773,
    "y": 214.60000228881836,
    "wires": []
}, {
    "id": "667bdde9.0eceb4",
    "type": "function",
    "z": "b6bf9868.f94358",
    "name": "data monday",
    "func": "msg.newD = new Date().getDay();\nmsg.newM = new Date().getMonth();\nmsg.newY = new Date().getFullYear();\nmsg.topic = \"secret of RED\"\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 315.0999984741211,
    "y": 81.60000228881836,
    "wires": [
        ["edbc463f.190eb8"]
    ]
}, {
    "id": "c24c3234.4c01b",
    "type": "change",
    "z": "b6bf9868.f94358",
    "name": "",
    "rules": [{
        "t": "set",
        "p": "backup",
        "pt": "msg",
        "to": "payload",
        "tot": "msg"
    }, {
        "t": "set",
        "p": "payload",
        "pt": "msg",
        "to": "\"Here is Json Raport: \" & msg.payload",
        "tot": "jsonata"
    }, {
        "t": "set",
        "p": "topic",
        "pt": "msg",
        "to": "\"Daily Raport #\" & $string(msg.newD)",
        "tot": "jsonata"
    }, {
        "t": "set",
        "p": "to",
        "pt": "msg",
        "to": "jok@o2.pl",
        "tot": "str"
    }],
    "action": "",
    "property": "",
    "from": "",
    "to": "",
    "reg": false,
    "x": 690.1000595092773,
    "y": 124,
    "wires": [
        ["f806f24b.9b5d7"]
    ]
}, {
    "id": "edbc463f.190eb8",
    "type": "rbe",
    "z": "b6bf9868.f94358",
    "name": "",
    "func": "rbe",
    "gap": "",
    "start": "",
    "inout": "out",
    "property": "payload",
    "x": 358.1000061035156,
    "y": 165.6000509262085,
    "wires": [
        ["67920ed4.ce4"]
    ]
}, {
    "id": "f806f24b.9b5d7",
    "type": "e-mail",
    "z": "b6bf9868.f94358",
    "server": "smtp.gmail.com",
    "port": "465",
    "secure": true,
    "name": "",
    "dname": "",
    "x": 950.1000061035156,
    "y": 157.80002975463867,
    "wires": []
}, {
    "id": "67920ed4.ce4",
    "type": "switch",
    "z": "b6bf9868.f94358",
    "name": "workday or schoolday?",
    "property": "newD",
    "propertyType": "msg",
    "rules": [{
        "t": "btwn",
        "v": "1",
        "vt": "num",
        "v2": "5",
        "v2t": "num"
    }, {
        "t": "else"
    }],
    "checkall": "true",
    "repair": false,
    "outputs": 2,
    "x": 338.10005950927734,
    "y": 259.8000431060791,
    "wires": [
        ["877fe5aa.d5ef68", "c24c3234.4c01b"],
        ["4ec3c593.e9dd4c"]
    ],
    "outputLabels": ["work day", "schoolday"]
}, {
    "id": "4ec3c593.e9dd4c",
    "type": "debug",
    "z": "b6bf9868.f94358",
    "name": "",
    "active": true,
    "tosidebar": true,
    "console": false,
    "tostatus": false,
    "complete": "true",
    "x": 564.0000114440918,
    "y": 276.00000381469727,
    "wires": []
}, {
    "id": "d5653fe.d7494c",
    "type": "inject",
    "z": "b6bf9868.f94358",
    "name": "",
    "topic": "",
    "payload": "myMemberTest",
    "payloadType": "str",
    "repeat": "",
    "crontab": "",
    "once": false,
    "onceDelay": 0.1,
    "x": 267.1000061035156,
    "y": 909.4000377655029,
    "wires": [
        ["6cb4f03c.f07f4"]
    ]
}, {
    "id": "6f9ef324.5b2ddc",
    "type": "e-mail",
    "z": "b6bf9868.f94358",
    "server": "smtp.gmail.com",
    "port": "465",
    "secure": true,
    "name": "",
    "dname": "",
    "x": 573.1000556945801,
    "y": 964.2000389099121,
    "wires": []
}, {
    "id": "6cb4f03c.f07f4",
    "type": "change",
    "z": "b6bf9868.f94358",
    "name": "",
    "rules": [{
        "t": "set",
        "p": "payload",
        "pt": "msg",
        "to": "\"test raport: \" & msg.payload",
        "tot": "jsonata"
    }, {
        "t": "set",
        "p": "topic",
        "pt": "msg",
        "to": "true",
        "tot": "bool"
    }, {
        "t": "set",
        "p": "to",
        "pt": "msg",
        "to": "riper193@wp.pl",
        "tot": "str"
    }],
    "action": "",
    "property": "",
    "from": "",
    "to": "",
    "reg": false,
    "x": 585.1000595092773,
    "y": 839.2000370025635,
    "wires": [
        ["6f9ef324.5b2ddc"]
    ]
}]