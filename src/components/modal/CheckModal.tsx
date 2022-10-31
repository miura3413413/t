import { NextPage } from 'next'
import styled from '@emotion/styled'
import { StyledButton } from '../../pages';


interface Props {
  handleCloseClick: (e: React.MouseEvent<HTMLElement>)  => void;
  DeleteHandler: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>
}

const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height:100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`


const StyledDivWrapper = styled.div`
  background-color: #fff;
  padding: 10px ;
  border-radius: 20px;
`

const StyledH3 = styled.h3`
  font-weight: bold;
  position: relative;
  left: 30px;
`

const StyledP = styled.p`
  position: relative;
  top: -10px;
  left: 18px;
`


export const CheckModal: NextPage<Props> = ({ handleCloseClick, DeleteHandler }: Props) => {
  return (
    <StyledDiv onClick={handleCloseClick}>
      <StyledDivWrapper onClick={(e) => {e.stopPropagation()}}>
        <StyledH3>ツイートを削除しますか？</StyledH3>
        <StyledP>この操作は取り消せません。プロフィ
          <br/>ール、あなたをフォローしているアカ
          <br/>ウントのタイムライン、Twitterの検索
          <br/>結果からツイートが削除されます。
        </StyledP>
        <div style={{display: "flex", flexFlow: "column"}}>
          <StyledButton bgColor='red' color='white' hoverBgColor='#cc0a0a' onClick={DeleteHandler}>削除</StyledButton>
          <StyledButton hoverBgColor='#e2e2e2' onClick={handleCloseClick}>キャンセル</StyledButton>
        </div>
      </StyledDivWrapper>
    </StyledDiv>
  )
}

export default CheckModal