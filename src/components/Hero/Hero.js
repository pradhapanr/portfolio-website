import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, IgnoreCSS } from './HeroStyles';

const Hero = () => (
    <div>
        <Section row nopadding>
            <LeftSection>
                <SectionTitle main center>
                    Hey there! <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Emoji_u1f44b.svg/1200px-Emoji_u1f44b.svg.png" width="60" height="60"/><br />
                    My name's Prad.
                </SectionTitle>
                <SectionText>
                    I am a student at the University of Guelph going into my third year. 
                </SectionText>
                <Button onClick = {() => window.location = "mailto:rajendranpradhapan@gmail.com"}>
                    Contact Me
                </Button>
            </LeftSection>
        </Section>
    </div>
);

export default Hero;