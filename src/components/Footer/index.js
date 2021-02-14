import React from 'react';
import { Button } from '../../globalStyles';

import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
}
    from 'react-icons/fa';

import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    Form,
    FormInput,
    FooterLink,
    FooterLinksContainer,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLinksWrapper,
    WebsiteRights,
    SocialIcons,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIconLink,
    SocialIcon
}
    from
    './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            {/* <FooterSubscription>
                <FooterSubHeading>
                    Join our community!
               </FooterSubHeading>
                <FooterSubText>You can subscribe to our blogs!</FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email" />
                    <Button fontBig> Subscribe</Button>
                </Form>
            </FooterSubscription> */}
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/sign-in'>How it works</FooterLink>
                        <FooterLink to='/'>Ayurveda</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinkTitle>Clinical Trials</FooterLinkTitle>
                        <FooterLink to='/sign-in'>How it works</FooterLink>
                        <FooterLink to='/'>Ayurveda</FooterLink>
                        <FooterLink to='/'>Blockchain</FooterLink>
                    </FooterLinksItems>

                </FooterLinksWrapper>

                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Blogs</FooterLinkTitle>
                        <FooterLink to='/'>Ayurveda</FooterLink>
                        <FooterLink to='/'>Submit Blogs</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/sign-in'>Contact</FooterLink>
                        <FooterLink to='/'>Support</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>

                <FooterLinksWrapper>
                    <FooterSubscription>
                        <FooterSubHeading>
                        Subscribe to our blogs!
               </FooterSubHeading>
                        {/* <FooterSubText>You can subscribe to our blogs!</FooterSubText> */}
                        <Form>
                            <FormInput name="email" type="email" placeholder="Your Email" />
                            <Button fontBig> Subscribe</Button>
                        </Form>
                    </FooterSubscription>

                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        <SocialIcon />
            AYURTRIAL
          </SocialLogo>
                    <WebsiteRights>  © 2020 Ayutrial, Inc. All Rights Reserved </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink
                            href={'/'}
                            rel='noopener noreferrer'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    );
};

export default Footer;
