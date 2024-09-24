
//aqui vão todos os estilos das coisas usando styleSheet(ele meio que fica pré-definido como no css)

import React from 'react';
import { ScrollView, StyleSheet, Dimensions} from 'react-native';
const { width } = Dimensions.get('window');

export const Responsive = StyleSheet.create({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center' 
})


export const Entrada = StyleSheet.create({
  inputBox:
  {
    backgroundColor: "#FFFFFF",
    borderColor: "#DADADA",
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 17,
    marginBottom: 16,
    marginHorizontal: 24,
  },
  inputText:
    {
        color: "#171B3B",
        fontSize: 14,
    },
    
    inputAndroid: {
      backgroundColor: "#FFFFFF",
      borderColor: "#DADADA",
      borderRadius: 8,
      borderWidth: 1,
      paddingVertical: 2,
      paddingHorizontal: 17,
      marginBottom: 16,
      marginHorizontal: 24,
      }

})

export const explanation = StyleSheet.create({//texto explicando sobre o login
        littleEx:
        {
            color: "#171B3B",
            fontSize: 14,
            marginBottom: 27,
            width: '100%',
            textAlign: 'center',
            paddingHorizontal: 10,
        },
        bigExplanation:
        {
            color: "#171B3B",
            fontSize: 18,
            marginBottom: "auto",
            width: '100%',
            textAlign: 'center',
            paddingHorizontal: 10,
        },

});


export const NativeScreen = StyleSheet.create({
    safeAreaView: 
    {
        flex: 1,
        backgroundColor: "#DFDFDF",
    },

    scrollView: 
    {
        flex: 1,
        backgroundColor: "#DFDFDF",
    },

    View: 
    {
        flexDirection: "row",
        backgroundColor: "#DADADA",
        paddingBottom: 14,
        paddingLeft: 34,
        paddingRight: 15,
        marginBottom: 58,

    }
});


export const button = StyleSheet.create({
    darkButton:
    {
        alignItems: "center",
        backgroundColor: "#171B3B",
        borderRadius: 8,
        paddingVertical: 14,
        marginBottom: 31,
        marginHorizontal: 24,        
    },
    clearButton:
    {
        alignItems: "center",
        backgroundColor: "#EEEEEE",
        borderRadius: 8,
        paddingVertical: 14,
        marginBottom: 27,
        marginHorizontal: 24,
    },
    clearText:
    {
        color: "#171B3B",
        fontSize: 14,
    },
    text:
    {
        color: "#DADADA",
        fontSize: 14,
    }
});

export const divider = StyleSheet.create({
    line:
    {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 23,
        marginHorizontal: 24,
        width: 147,
        backgroundColor: "#363851"
    },
    text:
    {
        color:"#363851",
        fontSize:14,
    }
});

export const tips = StyleSheet.create({
  tipsContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  tip: {
    fontSize: 14,
    color: '#333',
  },
});
