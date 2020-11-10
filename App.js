import React, { useState } from 'react'
import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
} from 'react-native'
import CheckBox from '@react-native-community/checkbox'

const App = () => {
  const [satu, setSatu] = useState(null)
  const [dua, setDua] = useState(null)
  const [tiga, setTiga] = useState(null)
  const [hasil, setHasil] = useState(null)

  const [cekA, setCekA] = useState(true)
  const [cekB, setCekB] = useState(true)
  const [cekC, setCekC] = useState(true)

  const validate = (value, list) => {
    if (value) {
      list.push(value);
    }
  };

  const tambah = () => {
    const data = []
    let a = null
    let b = null
    let c = null

    if(cekA) {
      a = Number(satu)
    }
    if(cekB) {
      b = Number(dua)
    }
    if(cekC) {
      c = Number(tiga)
    }

    validate(a, data)
    validate(b, data)
    validate(c, data)

    let result = data[0]
    for(let i=1;i<data.length;i++) {
      result += data[i]
    }

    if(data.length <= 1) {
      setHasil("Error")
    } else {
      setHasil(result)
    }
  }

  const kurang = () => {
    const data = []
    let a = null
    let b = null
    let c = null

    if(cekA) {
      a = Number(satu)
    }
    if(cekB) {
      b = Number(dua)
    }
    if(cekC) {
      c = Number(tiga)
    }

    validate(a, data)
    validate(b, data)
    validate(c, data)

    let result = data[0]
    for(let i=1;i<data.length;i++) {
      result -= data[i]
    }

    if(data.length <= 1) {
      setHasil("Error")
    } else {
      setHasil(result)
    }
  }

  const kali = () => {
    const data = []
    let a = null
    let b = null
    let c = null

    if(cekA) {
      a = Number(satu)
    }
    if(cekB) {
      b = Number(dua)
    }
    if(cekC) {
      c = Number(tiga)
    }

    validate(a, data)
    validate(b, data)
    validate(c, data)

    let result = data[0]
    for(let i=1;i<data.length;i++) {
      result *= data[i]
    }

    if(data.length <= 1) {
      setHasil("Error")
    } else {
      setHasil(result)
    }
  }

  const bagi = () => {
    const data = []
    let a = null
    let b = null
    let c = null

    if(cekA) {
      a = Number(satu)
    }
    if(cekB) {
      b = Number(dua)
    }
    if(cekC) {
      c = Number(tiga)
    }

    validate(a, data)
    validate(b, data)
    validate(c, data)

    let result = data[0]
    for(let i=1;i<data.length;i++) {
      result /= data[i]
    }

    if(data.length <= 1) {
      setHasil("Error")
    } else {
      setHasil(result)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Kalkulator Sederhana</Text>
      <View style={styles.input}>
        <TextInput
          style={styles.inputText}
          placeholder="Masukkan angka"
          keyboardType="number-pad"
          value={satu}
          onChangeText={(val) => setSatu(val)}
        />
        <CheckBox
          value={cekA}
          onValueChange={() => setCekA(cekA ? false : true)}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          style={styles.inputText}
          placeholder="Masukkan angka"
          keyboardType="number-pad"
          value={dua}
          onChangeText={(val) => setDua(val)}
        />
        <CheckBox
          value={cekB}
          onValueChange={() => setCekB(cekB ? false : true)}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          style={styles.inputText}
          placeholder="Masukkan angka"
          keyboardType="number-pad"
          value={tiga}
          onChangeText={(val) => setTiga(val)}
        />
        <CheckBox
          value={cekC}
          onValueChange={() => setCekC(cekC ? false : true)}
        />
      </View>

      <View style={styles.operator}>
        <TouchableOpacity onPress={tambah} style={styles.operatorBtn}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={kurang} style={styles.operatorBtn}>
          <Text>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={kali} style={styles.operatorBtn}>
          <Text>X</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={bagi} style={styles.operatorBtn}>
          <Text>/</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.hasil}>
        <Text style={styles.labelHasil}>Hasil:</Text>
        <Text style={styles.sum}>{hasil}</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center'
  },
  inputText: {
    borderWidth: 2,
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  operator: {
    flexDirection: 'row',
  },
  operatorBtn: {
    flex: 1,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center'
  },
  hasil: {
    marginTop: 15,
    flexDirection: 'row',
  },
  labelHasil: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1
  },
  sum: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-end'
  }
})

export default App
