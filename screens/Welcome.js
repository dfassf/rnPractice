import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';

//formik
import {Formik} from 'formik';

//icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons'

import {
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Line,
    WelcomeContainer, 
    WelcomeImage,
    Avatar
} from './../components/styles'

const Welcome = () => {
    return(
        <>
            <StatusBar style="dark"/>
            <InnerContainer>
                <WelcomeImage resizeMode = "cover" source={require('./../assets/sam.jpeg')}/>
                <WelcomeContainer>
                    <PageTitle welcome={true}>Welcome bruh</PageTitle>
                    <SubTitle welcome={true}>Shinwoo Um</SubTitle>
                    <SubTitle welcome={true}>dfassf@gmail.com</SubTitle>
                    <StyledFormArea>
                    <Avatar resizeMode = "cover" source={require('./../assets/sam.jpeg')}/>
                        <Line/>
                        <StyledButton onPress = {()=>{}}>
                            <ButtonText>
                                Logout
                            </ButtonText>
                        </StyledButton>
                       
                    </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
        </>
    );
}

export default Welcome;