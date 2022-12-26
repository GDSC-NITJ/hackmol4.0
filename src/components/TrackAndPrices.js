import React from 'react'
import {
  ElevatedCard,
  Column,
  Row,
  Typography
} from '@cred/neopop-web/lib/components';
import {
  mainColors,
  fontNameSpaces

} from '@cred/neopop-web/lib/primitives';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  padding: 40px;
`;


function TrackAndPrices() {
  return (
    <div className='flex'>
      <div className='flex flex-col bg-yellow p-8 w-1/2 justify-around items-between'>
        <div className='flex justify-between'>

          <ElevatedCard
            backgroundColor="#94E95D"
            edgeColors={{
              bottom: '#000000',
              right: '#000000',
            }}
            style={{
              width: '230px',
              borderRadius: '14px'
            }}
          >
            <ContentWrapper>
              <Column>
                <Row className="v-justify">
                  <div>
                    <Typography {...fontNameSpaces.tc12b} color={mainColors.white}>
                      Fresher Track
                    </Typography>


                  </div>

                </Row>
              </Column>
            </ContentWrapper>
          </ElevatedCard>
          <ElevatedCard
            backgroundColor="#FFFFFF"
            edgeColors={{
              bottom: '#000000',
              right: '#000000',
            }}
            style={{
              width: '80px',
              borderRadius: '14px'
            }}
          >
            <ContentWrapper>
              <Column>
                <Row className="v-justify">
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z" data-name="3-Arrow Right"/></svg>


                  </div>

                </Row>
              </Column>
            </ContentWrapper>
          </ElevatedCard>
        </div>
        <div className='flex justify-between'>

        <ElevatedCard
          backgroundColor="#94E95D"
          edgeColors={{
            bottom: '#000000',
            right: '#000000',
          }}
          style={{
            width: '230px',
            borderRadius: '14px'
          }}
        >
          <ContentWrapper>
            <Column>
              <Row className="v-justify">
                <div>
                  <Typography {...fontNameSpaces.tc12b} color={mainColors.white}>
                    Fresher Track
                  </Typography>


                </div>

              </Row>
            </Column>
          </ContentWrapper>
        </ElevatedCard>
        <ElevatedCard
            backgroundColor="#FFFFFF"
            edgeColors={{
              bottom: '#000000',
              right: '#000000',
            }}
            style={{
              width: '80px',
              borderRadius: '14px'
            }}
          >
            <ContentWrapper>
              <Column>
                <Row className="v-justify">
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z" data-name="3-Arrow Right"/></svg>


                  </div>

                </Row>
              </Column>
            </ContentWrapper>
          </ElevatedCard>
        </div>
        <div>
          
        </div>
        <div className='flex justify-between'>

        <ElevatedCard
          backgroundColor="#94E95D"
          edgeColors={{
            bottom: '#000000',
            right: '#000000',
          }}
          style={{
            width: '230px',
            borderRadius: '14px'
          }}
        >
          <ContentWrapper>
            <Column>
              <Row className="v-justify">
                <div>
                  <Typography {...fontNameSpaces.tc12b} color={mainColors.white}>
                    Fresher Track
                  </Typography>
                </div>
              </Row>
            </Column>
          </ContentWrapper> 
        </ElevatedCard>
        <ElevatedCard
            backgroundColor="#FFFFFF"
            edgeColors={{
              bottom: '#000000',
              right: '#000000',
            }}
            style={{
              width: '80px',
              borderRadius: '14px'
            }}
          >
            <ContentWrapper>
              <Column>
                <Row className="v-justify">
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z" data-name="3-Arrow Right"/></svg>
                  </div>

                </Row>
              </Column>
            </ContentWrapper>
          </ElevatedCard>
        </div>
      </div>
      <div className='flex flex-col bg-white border-2 items-center justify-center p-10 w-1/2'>
        <div className='flex flex-col justify-center items-center'>
        <h1 className='text-6xl bold'>Track 1 - Freshers</h1>
        <p className='px-56 semi-bold'> Create and customize your storefront with our all-in-one platform or choose to use your personal site instead. With Zapier, you can seamlessly connect your Gumroad account to thousands of apps in your current stack.</p>
        </div>
      </div>

    </div>

  )
}

export default TrackAndPrices