import { useEffect, useState } from "react";
import {
  StyledAdditionalWrap,
  StyledBottomMargin,
  StyledContainer,
  StyledContentWrapper,
  StyledDealInfoWrap,
  StyledDealName,
  StyledDealTextWrap,
  StyledHero,
  StyledLi,
  StyledLink,
  StyledList,
  StyledListSection,
} from "./Home.styled";
import { fetchDeals } from "../../services/api";
import Loader from "../../Components/Loader/Loader";

const Home = () => {
  const [deals, setDeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(null);

  const getDealsList = async () => {
    setIsLoading(true);
    try {
      const data = await fetchDeals();
      setDeals(data.result);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDealsList();
  }, []);

  return (
    <>
      <StyledHero>
        <StyledContentWrapper>
          <h1>The chemical negatively charged</h1>
          <p>
            Numerous calculations predict, and experiments confirm, that the
            force field reflects the beam, while the mass defect is not formed.
            The chemical compound is negatively charged. Twhile the mass defect
            is
          </p>
          <StyledLink to="/login">Get Started</StyledLink>
        </StyledContentWrapper>
      </StyledHero>
      <StyledListSection>
        <StyledContainer>
          <h2>Open deals</h2>
          <StyledList>
            {deals?.map(
              ({ name, price, ticket, yield: y, daysLeft, sold, preview }) => (
                <StyledLi key={name}>
                  <StyledDealInfoWrap>
                    <div>
                      <img src={preview} alt={name} />
                    </div>
                    <StyledDealTextWrap>
                      <div>
                        <StyledDealName>{name}</StyledDealName>
                        <StyledBottomMargin>{price}</StyledBottomMargin>
                        <p>Ticket - {ticket}</p>
                      </div>
                      <StyledAdditionalWrap>
                        <div>
                          <StyledBottomMargin>Yield {y}</StyledBottomMargin>
                          <p>Days left {daysLeft}</p>
                        </div>

                        <div>Sold {sold}</div>
                      </StyledAdditionalWrap>
                    </StyledDealTextWrap>
                  </StyledDealInfoWrap>
                </StyledLi>
              )
            )}
          </StyledList>
        </StyledContainer>
        {isLoading && <Loader />}
      </StyledListSection>
    </>
  );
};

export default Home;
