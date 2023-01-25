import { useEffect, useState, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import ClipLoader from 'react-spinners/ClipLoader';
import { Button, Text } from 'components/atoms';

import { assetListState, strategyState } from 'recoil/allocation';
import { ALLOC_ALGORITHM, ALLOC_LEVEL, ALLOC_REBALANCING } from 'pages/Allocation/constant';

import { checkBlank } from 'utils';
import { flex, theme } from 'styles';
import { Modal } from 'components/molecule';

function BackTest() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [progress, setProgress] = useState(0);

  const timerId = useRef<NodeJS.Timer | null>(null);
  const assetList = useRecoilValue(assetListState);
  const strategy = useRecoilValue(strategyState);

  const createBackTest = () => {
    const values = Object.values(strategy);

    if (!checkBlank<string>(values)) return setIsError(true);

    setIsLoading(true);
  };

  const createSuccess = () => {
    const { algo, allocRebalancing, level, ...rest } = strategy;

    const formatted = {
      algo: ALLOC_ALGORITHM[algo],
      allocRebalancing: allocRebalancing ? ALLOC_REBALANCING[allocRebalancing] : '',
      assetList,
      level: ALLOC_LEVEL[level],
      ...rest,
    };

    // 생성 API 호출 대신 console.log로 최종 값 확인
    console.log('백테스트 생성 성공!', formatted);
    alert('백테스트 생성 성공!');
  };

  const start = () => {
    if (timerId.current !== null) return;
    timerId.current = setInterval(() => setProgress((prev) => prev + 1), 100);
  };

  const stop = () => {
    if (timerId.current === null) return;
    clearInterval(timerId.current);
    timerId.current = null;
  };

  const toggleErrorModal = () => {
    setIsError((prev) => !prev);
  };

  useEffect(() => {
    if (!isLoading) return;

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setProgress(0);
    }, 10100);
  }, [isLoading]);

  useEffect(() => {
    if (!isSuccess) return;

    setTimeout(() => {
      setIsSuccess(false);
      createSuccess();
    }, 1500);
  }, [isSuccess]);

  useEffect(() => {
    if (isLoading && !progress) return start();
    if (progress === 100) return stop();
  }, [isLoading, progress]);

  return (
    <Container>
      {isLoading && (
        <ProgressBtn>
          {progress < 20 ? (
            <MessageWrap>
              <Message>대기 중...</Message>
              <ClipLoader loading color={theme.orange} size={20} />
            </MessageWrap>
          ) : (
            <ProgressBar progress={progress}></ProgressBar>
          )}
        </ProgressBtn>
      )}
      {isSuccess && (
        <ProgressBtn>
          <MessageWrap>
            <Message>생성 중...</Message>
            <ClipLoader loading color={theme.orange} size={20} />
          </MessageWrap>
        </ProgressBtn>
      )}
      <Modal>
        <Modal.Trigger>
          {!isLoading && !isSuccess && (
            <BackTestBtn onClick={createBackTest}>
              <Text.Medium color={theme.black} weight={700}>
                백테스트
              </Text.Medium>
            </BackTestBtn>
          )}
          <Modal.Dimmed isOpen={isError} onClose={toggleErrorModal} />
        </Modal.Trigger>
        <Modal.Contents isOpen={isError} onClose={toggleErrorModal}>
          <Modal.Title>필수 항목 미설정</Modal.Title>
          <Description>
            <Text.Regular weight={300}>[필수] &quot;모든 항목을 설정&quot; 해주셔야</Text.Regular>
            <Text.Regular weight={300}>백테스트 이(가) 실행됩니다.</Text.Regular>
          </Description>
          <Modal.Button onClick={toggleErrorModal}>확인</Modal.Button>
        </Modal.Contents>
      </Modal>
    </Container>
  );
}

export default BackTest;

const Container = styled.div`
  ${flex('center', '')}
  cursor: pointer;
`;

const BackTestBtn = styled(Button)`
  width: 190px;
  height: 60px;
  background: linear-gradient(to right, rgb(236, 97, 38), rgb(236, 38, 38));
`;

const ProgressBtn = styled.button`
  width: 190px;
  height: 60px;
  border: 1px solid ${theme.orange};
  border-radius: 8px;
`;

const ProgressBar = styled.div<{ progress: number }>`
  width: ${(props) => props.progress}%;
  height: 100%;
  border-radius: 8px;
  background: linear-gradient(to right, rgb(236, 97, 38), rgb(236, 38, 38));
`;

const Message = styled(Text.Medium)`
  font-weight: 700;
  color: ${theme.white};
`;

const MessageWrap = styled.div`
  ${flex('center', 'center')}
  width: 100%;
  column-gap: 10px;
`;

const Description = styled(Modal.Description)`
  row-gap: 10px;
`;
