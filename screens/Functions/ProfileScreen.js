

import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity, Link, Linking } from 'react-native'
import GlobalStyles from '../../Styles/GlobalStyles';

const ProfileScreen = ({ navigation }) => {

    const handlePress = () => {
        Linking.openURL('https://acortar.link/IfCSnm');
    }
    return (
        <ScrollView>
            <View style={GlobalStyles.ProfileContainer}> {/**Check */}
                <Text style={GlobalStyles.title_auth}>Mi Hoja De Vida</Text> {/**Check */}
                <View style={GlobalStyles.bodyTopDashboard}>{/**Check */}
                    <Image source={require('../../img/profile_logo.png')} style={styles.logo_img} />
                    <Text style={[GlobalStyles.textGeneral, styles.partition]}>Datos de Usuario</Text>
                    <View style={styles.content}>
                        <View style={styles.left}>
                            <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>Nombre:</Text>
                            <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>Edad:</Text>
                            <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>Teléfono:</Text>
                            <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>Email:</Text>
                            <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>Dirección:</Text>
                        </View>
                        <View style={styles.right}>
                            <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>Keineer Alberto</Text>
                            <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>17</Text>
                            <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>3222450755</Text>
                            <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>karivera280@sena</Text>
                            <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>Engativá Bogotá D.C</Text>
                        </View>
                    </View>
                    <Text style={[GlobalStyles.textGeneral, styles.partition]}>Perfil Laboral</Text>
                    <Text style={styles.content}>Estudiante de Análisis y Desarrollo de Software con 2 años de experiencia. Conocimientos en Python, JavaScript, React, HTML, CSS y SQL. Colaborador y líder en equipo, con habilidades para trabajar en equipo y liderar proyectos.</Text>
                    <Text style={[GlobalStyles.textGeneral, styles.partition]}>Skills</Text>
                    <View style={styles.content}>
                        <View style={styles.left}>
                            <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>Lenguaje:</Text>
                            <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>Html</Text>
                            <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>Css</Text>
                            <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>JavaScript</Text>
                            <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>Python</Text>
                            <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>MySql</Text>
                            <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>React</Text>
                        </View>
                        <View style={styles.right}>
                            <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>Años:</Text>
                            <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>1</Text>
                            <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>1</Text>
                            <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>1</Text>
                            <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>2 meses</Text>
                            <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>1</Text>
                            <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>2 meses</Text>
                        </View>
                    </View>
                    <Text style={[GlobalStyles.textGeneral, styles.partition]}>Otros</Text>
                    <Text style={[styles.textGeneral, styles.labelLink]}>Conoce más de mi. Accede a mi portafolio</Text>
                    <TouchableOpacity onPress={handlePress}>
                        <Text style={GlobalStyles.anchorLink}>Keineer.Portafolio.Web</Text>
                    </TouchableOpacity>

                </View>
                <View style={GlobalStyles.bodyBottom}>
                    <Text onPress={() => navigation.navigate('HomeScreen')} style={[GlobalStyles.textGeneral, styles.backbuttom]}>Volver a home</Text>
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    logo_img: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
        marginBottom: 40,
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        width: '85%',
        paddingVertical: 10,
        textAlign: 'center'
    },
    partition: {
        backgroundColor: '#38BDF8',
        color: 'white',
        padding: 4,
        width: '85%',
        textAlign: 'center'
    },
    left: {
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
    },
    right: {
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
    },
    textGeneral: {
        fontSize: 14,
    },
    labelLink: {
        marginTop: 15,
    },
    backbuttom: {
        backgroundColor: '#1E3A8A',
        color: 'white',
        padding: 6,
        width: '85%',
        textAlign: 'center',
        borderRadius: 15,
        marginTop: 20,

    },
});

export default ProfileScreen