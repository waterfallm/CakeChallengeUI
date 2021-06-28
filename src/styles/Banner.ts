import styled from 'styled-components';

export const StyledBanner = styled.div`
  clip-path: polygon(0 0, 100% 0, 100% 70%, 55% 100%, 45% 100%, 0 70%);
  padding: 8rem 0 15rem 0;
  margin-bottom: -15rem;
  background: linear-gradient(90deg, #081a58, #1b3490);
  @media (max-width: 992px) {
    clip-path: polygon(0 0, 100% 0, 100% 90%, 55% 100%, 45% 100%, 0 90%);
    margin-bottom: -15.5rem;
  }
  @media (max-width: 768px) {
    padding-top: 5rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 1rem;
  @media (max-width: 1200px) {
    max-width: 960px;
  }
  @media (max-width: 992px) {
    max-width: 720px;
  }
  @media (max-width: 768px) {
    max-width: 540px;
  }
`;

export const Section = styled.div`
  padding: 3rem 0 7rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-start;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  justify-content: center;
  line-height: 1;
  color: #ffffff;
  @media (max-width: 991.98px) {
    font-size: 32px;
    line-height: 48px;
  }
  @media (max-width: 767.98px) {
    font-size: 28px;
    line-height: 42px;
  }
`;

export const SubtitleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 75%;
`;

export const Subtitle = styled.h4`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff60;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 991.98px) {
    font-size: 16px;
    line-height: 24px;
  }
  @media (max-width: 767.98px) {
    font-size: 14px;
    line-height: 28px;
  }
`;

export const CopyButton = styled.button`
  margin-left: 1.5rem;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  @media (max-width: 767.98px) {
    margin-left: 1rem;
  }
`;

export const CopyIcon = styled.img`
  width: 2.25rem;
  @media (max-width: 767.98px) {
    width: 2rem;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Detail = styled.div`
  width: 25%;
  border-left: 0.5px solid #586aa8;
  text-align: center;
  margin: 1rem 0;
  & > a {
    text-decoration: none;
  }
  &:nth-child(4n - 3) {
    border: none;
  }
  @media (max-width: 992px) {
    width: 50%;
    &:nth-child(2n + 1) {
      border: none;
    }
  }
`;

export const DetailHeader = styled.h4`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.75rem;
  font-weight: 300;
  color: #ffffff40;
  margin-bottom: 1rem;
  font-family: 'Roboto';
  font-style: normal;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-line-clamp: 1;
`;

export const DetailValue = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  color: #ffffff;
  font-family: 'Roboto';
  font-style: normal;
  display: block;
  text-transform: capitalize;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-line-clamp: 1;
`;

export const Mouse = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

export const MouseIcon = styled.div`
  position: relative;
  width: 28px;
  height: 44px;
  opacity: 0.75;
  border-radius: 14px;
  border: 2px solid #fff;
  :after {
    display: block;
    content: '';
    width: 4px;
    height: 7px;
    margin: 6px auto;
    opacity: 0.75;
    background-color: #ffffff;
    border-radius: 2px;
    animation: mouse-wheel 1s linear infinite;
    -webkit-animation: mouse-wheel 1s linear infinite;
    -moz-animation: mouse-wheel 1s linear infinite;
  }
`;

export const MouseArrow = styled.div`
  display: block;
  width: 10px;
  height: 10px;
  opacity: 0.75;
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transform: rotate(45deg);
  animation: mouse-scroll 1s linear infinite;
  -webkit-animation: mouse-scroll 1s linear infinite;
  -moz-animation: mouse-scroll 1s linear infinite;
`;
