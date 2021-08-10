import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
    return (
        <FooterWrapper>
            <LinkList>
                <LinkColumn>
                    <LinkTitle>Call</LinkTitle>
                    <LinkItem href="tel:647-819-1363">647-819-1363</LinkItem>
                </LinkColumn>
                <LinkColumn>
                    <LinkTitle>Email</LinkTitle>
                    <LinkItem href="mailto:rajendranpradhapan@gmail.com">rajendranpradhapan@gmail.com</LinkItem>
                </LinkColumn>
            </LinkList>
            <SocialIconsContainer>
                <CompanyContainer>
                    <Slogan href="https://ca.gofundme.com/small-business-relief-fundraisers">Support small businesses!</Slogan>
                </CompanyContainer>
                <SocialIcons href="https://github.com/pradhapanr">
                    <AiFillGithub size="3rem" />
                </SocialIcons>
                <SocialIcons href="https://linkedin.com/in/pradhapanr">
                    <AiFillLinkedin size="3rem" />
                </SocialIcons>
            </SocialIconsContainer>
        </FooterWrapper>
    );
};

export default Footer;
