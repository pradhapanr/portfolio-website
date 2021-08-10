import React from 'react';
import { DiFirebase, DiReact} from 'react-icons/di';
import { AiFillCode } from 'react-icons/ai'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section nopadding id="tech">
      <SectionDivider/>
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
        Over the past 6 years, I have acquired various programming skills through my education
        at the University of Guelph as well as self study.
    </SectionText>
    <List>
        <ListItem>
            <AiFillCode size="3rem" />
            <ListContainer>
                <ListTitle>Languages</ListTitle>
                <ListParagraph>
                    Experience with <br />
                    Python, C, C#, Java and <br />
                    Javascript
                </ListParagraph>
            </ListContainer>
        </ListItem>
        <ListItem>
            <DiReact size="3rem" />
            <ListContainer>
                <ListTitle>Front-End</ListTitle>
                <ListParagraph>
                    Experience with <br />
                    React.js, jQuery, Sass
                </ListParagraph>
            </ListContainer>
        </ListItem>
        <ListItem>
            <DiFirebase size="3rem" />
            <ListContainer>
                <ListTitle>Back-End</ListTitle>
                <ListParagraph>
                    Experience with <br />
                    Node, Express, MongoDB, <br />
                    MySQL and MS SQL Server
                </ListParagraph>
            </ListContainer>
        </ListItem>
    </List>

    

  </Section>

);

export default Technologies;
