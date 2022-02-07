const jsonData = [
    {
        "id": 10,
        "firstName": "John",
        "lastName": "Doe"
    },
    {
        "id": 5,
        "firstName": "Jack",
        "lastName": "Doe"
    },
    {
        "id": 7,
        "firstName": "James",
        "lastName": "Doe"
    }
]

const xmlData = `<persons>
                    <person>
                        <id>3</id>
                        <firstName>Jen</firstName>
                        <lastName>Doe</lastName>
                    </person>
                    <person>
                        <id>6</id>
                        <firstName>Stephanie</firstName>
                        <lastName>Joe</lastName>
                    </person>
                    <person>
                        <id>1</id>
                        <firstName>Victoria</firstName>
                        <lastName>Doe</lastName>
                    </person>
                </persons>`

const personApi = {
    getJSONData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    person: jsonData
                })
            }, 5000)
        })
    },
    getXMLData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(xmlData)
            }, 10000)
        })
    }
}

export default personApi