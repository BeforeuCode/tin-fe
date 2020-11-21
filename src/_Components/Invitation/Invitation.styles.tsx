import styled from '@emotion/styled';

export const StyledInvitationCard = styled.div`
  width: 80%;
  height: 260px;
  display: flex;
  flex-direction: column;
  background-color: #252547;
  border-radius: 5px;
  box-shadow: 0px 4px 4px #5471b950;
  margin-bottom: 3rem;
`;

export const StyledGameInfo = styled.div`
  height: 75%;
  border-bottom: 1px solid #70707080;
  display: flex;
  flex-direction: row;
`;

export const StyledButtons = styled.div`
  height: 25%;
  display: flex;
  justify-content: flex-end;
  margin: 0 2rem 0 2rem;
  align-items: center;
`;

export const StyledLogoColumn = styled.div`
  display: flex;
  flex: 15;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledTextColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 75;
`;

export const StyledGameName = styled.h2`
  color: white;
  font-size: 12px;
  line-height: 14px;
`;

export const StyledLogo = styled.img`
  width: 103px;
  height: 143px;
`;

export const StyledTitle = styled.h2`
  color: white;
  font-weight: 700;
  font-size: 18px;
`;

export const StyledInfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInfoRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  padding-right: 20px;
`;

const StyledInfoText = styled.span`
  font-weight: 700;
  font-size: 12px;
`;

export const StyledInfoTitle = styled(StyledInfoText)`
  color: #6092ee;
  display: flex;
  flex: 18;
  width: 120px;
`;

export const StyledInfoDescription = styled(StyledInfoText)`
  color: white;
  display: flex;
  flex: 82;
`;
