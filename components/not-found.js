Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@iamkiko 
leadhomesa
/
leadhome-website-ui
Private
generated from leadhomesa/nextjs-starter
2
0
0
Code
Issues
Pull requests
7
Actions
Projects
Wiki
Security
Insights
leadhome-website-ui/src/pages/area-profiles/[province-slug]/index.js /
@seagyn
seagyn fix uri
Latest commit c95b8ac 9 days ago
 History
 1 contributor
217 lines (202 sloc)  6.17 KB
  
import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

import { useRouter } from 'next/router';
import getConfig from 'next/config';

import { getProvinceAreaProfile } from 'api/area-profiles';

import { Heading1, Heading2, Heading3 } from 'components/typography/headings';
import Seo from 'components/seo';

import {
  AreaList,
  Container,
  HeroContainer,
  ListItem,
  ListLink,
  ProfileContent,
  ProfileGlobalStyle,
  ProfileHeader,
  SubContainer,
  Sidebar
} from 'styles/area-profiles/profiles';

import { SmallCapsParagraph } from 'components/typography/paragraphs';
import BuyingCallToAction from 'components/call-to-actions/buying';
import PreApprovalCallToAction from 'components/call-to-actions/pre-approval';

import SubNavbar from 'components/sub-navbar';
import Link from 'next/link';
import { BackArrow, NavItem, Separator } from 'components/sub-navbar/styles';
import StyledMap from 'components/map';
import NotFound from 'components/not-found';

const { publicRuntimeConfig } = getConfig();

const ProvinceProfile = ({ provinceProfile, areaProfiles }) => {
  const { asPath } = useRouter();

  if (!provinceProfile) {
    return <NotFound />;
  }

  return (
    <>
      <ProfileGlobalStyle />
      <Seo
        title={provinceProfile.seo.title}
        description={provinceProfile.seo.metaDesc}
        openGraph={{
          images: [
            {
              alt: provinceProfile.featuredImage?.node?.altText,
              height: provinceProfile.featuredImage?.node?.mediaDetails?.height,
              width: provinceProfile.featuredImage?.node?.mediaDetails?.width,
              url: provinceProfile.featuredImage?.node?.sourceUrl
            }
          ]
        }}
      />
      <SubNavbar overlay={false}>
        <Link href='/area-profiles' passHref>
          <NavItem>
            <BackArrow />
            South Africa
          </NavItem>
        </Link>
        <Separator />
        {areaProfiles.nodes.map(province => (
          <Link
            key={`subnavbar-${province.extraData.areaName}`}
            href='/area-profiles/[province-slug]'
            as={province.uri}
            passHref
          >
            <NavItem active={asPath === province.uri}>
              {province.extraData.areaName}
            </NavItem>
          </Link>
        ))}
      </SubNavbar>
      <HeroContainer
        backgroundImage={provinceProfile.featuredImage.node.sourceUrl}
      />
      <ProfileHeader>
        <SmallCapsParagraph>Our Areas</SmallCapsParagraph>
        <Heading1>{provinceProfile.title}</Heading1>
        <Heading2>{provinceProfile.seo.metaDesc}</Heading2>
      </ProfileHeader>
      <Container>
        <SubContainer>
          <ProfileContent>
            {provinceProfile.content && parse(provinceProfile.content)}
          </ProfileContent>
          <Heading3>Location</Heading3>
          <StyledMap
            grayscale
            mapOpacity={1}
            showGradientOverlay={false}
            showPin
            showPulse
            gmapsKey={publicRuntimeConfig.gmapsKey}
            address={provinceProfile.extraData.areaName}
          />
          <Heading3>Areas in {provinceProfile.extraData.areaName}</Heading3>
          <AreaList inContent>
            {provinceProfile.children.nodes.map(area => (
              <ListItem key={`area-${area.extraData.areaName}`}>
                <Link
                  href='/area-profiles/[province-slug]/[town-slug]'
                  as={area.uri}
                  passHref
                >
                  <ListLink>{area.extraData.areaName}</ListLink>
                </Link>
              </ListItem>
            ))}
          </AreaList>
        </SubContainer>
        <Sidebar>
          <BuyingCallToAction
            queryParams={`?p=${provinceProfile.extraData.areaId}`}
          />
          <PreApprovalCallToAction />
        </Sidebar>
      </Container>
    </>
  );
};

ProvinceProfile.propTypes = {
  provinceProfile: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    uri: PropTypes.string,
    placeholderImage: PropTypes.shape({
      node: PropTypes.shape({
        sourceUrl: PropTypes.string.isRequired
      })
    }).isRequired,
    featuredImage: PropTypes.shape({
      node: PropTypes.shape({
        altText: PropTypes.string.isRequired,
        mediaDetails: PropTypes.shape({
          height: PropTypes.number.isRequired,
          width: PropTypes.number.isRequired
        }).isRequired,
        sizes: PropTypes.string.isRequired,
        sourceUrl: PropTypes.string.isRequired,
        srcSet: PropTypes.string.isRequired
      })
    }).isRequired,
    seo: PropTypes.shape({
      metaDesc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired,
    extraData: PropTypes.shape({
      areaType: PropTypes.string.isRequired,
      areaId: PropTypes.string.isRequired,
      areaName: PropTypes.string.isRequired,
      subtitle: PropTypes.string
    }).isRequired,
    children: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          uri: PropTypes.string.isRequired,
          extraData: PropTypes.shape({
            areaName: PropTypes.string.isRequired
          }).isRequired
        })
      )
    })
  }),
  areaProfiles: PropTypes.shape({
    nodes: PropTypes.arrayOf(
      PropTypes.shape({
        uri: PropTypes.string.isRequired,
        extraData: PropTypes.shape({
          areaName: PropTypes.string.isRequired
        }).isRequired
      })
    )
  })
};

export const getServerSideProps = async ({ params, res }) => {
  const province = params['province-slug'];
  const uri = `/area-profiles/${province}`;
  const {
    areaProfiles,
    areaProfile: provinceProfile
  } = await getProvinceAreaProfile(uri);

  /**
   * Needs to be tested properly but this may be the best way to handle 404s going forward.
   * This is only true if you want to use a global 404 (requires Next 9.3+)
   */
  if (!provinceProfile) {
    res.statusCode = 404;
    return {
      props: {
        provinceProfile: null,
        areaProfiles
      }
    };
  }

  return {
    props: {
      provinceProfile,
      areaProfiles
    }
  };
};

export default ProvinceProfile;