
import React from 'react';
import { useSelector } from 'react-redux';
import { t } from 'i18next'
import styled from 'styled-components';
import useTheme from '../../hooks/useTheme';
import { formatTime } from '../../utils/utils';

const TableContainer = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
  background-color: #f9f9f9;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

const TableHeader = styled.th`
  background-color: #4A90E2;
  color: white;
  padding: 14px;
  text-align: left;
`;

const TableCell = styled.td`
  padding: 14px;
  text-align: left;
  border-bottom: 1px solid #e3e3e3;
`;

const TableRow = styled.tr`
  &:hover {
    background-color: #f2f2f2;
  }
`;

const TableTitle = styled.p`
 color: ${(props) => props.theme.text.primary};
  font-size:1.5rem;
  font-weight: 700;
`;

const ScoreBoard = () => {
  const { currentTheme } = useTheme()
  const topScores = useSelector((state) => state.topScores.scores);

  return (
    <div>
      <TableTitle theme={currentTheme}>{t('scoreBoard.title')}</TableTitle>
      <TableContainer>
        <thead>
          <tr>
            <TableHeader>{t('scoreBoard.date')}</TableHeader>
            <TableHeader>{t('scoreBoard.score')}</TableHeader>
          </tr>
        </thead>
        <tbody>
          {topScores.map((score, index) => (
            <TableRow key={index}>
              <TableCell>{score.date}</TableCell>
              <TableCell>{formatTime(score.score)}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </TableContainer>
    </div>
  );
};

export default ScoreBoard;