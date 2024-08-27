
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

export const componentPost = StyleSheet.create({

  Color: {
    colorGhostwhite: "#f8f8ff",
    backgroundColor: "#363851"
  },

  FontFamily: {
    judsonRegular: "Judson-Regular",
  },

  Container: {//este é o espaço onde vão os dados do desaparecido EM TEXTO
    alignItems: 'center', 
    padding: 10,
    justifyContent: 'space-evenly',
    width: width * 1.4,
  },

  nameText: {
    fontSize: 20,
    color: "#f8f8ff",
    fontFamily: "Judson-Regular",
    textAlign: 'center',
    marginBottom: 10,
  },

  sexo: {
    fontSize: 18,
    textAlign: 'center',
    color: "#f8f8ff",
    fontFamily: "Judson-Regular",
    marginBottom: 10,
  },

  Age: {
    fontSize: 20,
    textAlign: 'center',
    color: "#f8f8ff",
    fontFamily: "Judson-Regular",
    marginBottom: 10,
  },

  LastView: {
    fontSize: 14,
    textAlign: 'center',
    width: 160,
    color: "#f8f8ff",
    fontFamily: "Judson-Regular",
    marginBottom: 10,
  },
  
  dateMiss: {
    textAlign: 'center',
    fontSize: 15,
    color: "#f8f8ff",
    fontFamily: "Judson-Regular",
    marginBottom: 10,
  },

  AddressTextStyle: {
    textAlign: 'center',
    width: 150,
    color: "#f8f8ff",
    fontSize: 14,
    fontFamily: "Judson-Regular",
    marginBottom: 10,
  },

  frameChild: {//frame da foto do post
    left: 10,
    width: width * 0.45,
    height: 238,
    top: 7,
    position: "absolute",
  },

  postActionsChild: {
    width: 35,
    height: 35,
    overflow: "hidden",
  },
  
  postActions: {//componente das ações do post
    top: 219,
    left: 65,
    width: 70,
    flexDirection: "row",
    alignItems: "center",
    //justifyContent: "space-between",
    position: "absolute",
    backgroundColor: "#2f4f4f",
  },

  PostComponent: {//o 'delimitador' do post
    borderRadius: 23,
    width: width * 0.97,
    height: 250,
    overflow: "hidden",
    backgroundColor: "#363851",
    overflow: 'hidden',
    marginHorizontal: 5,
  },

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
