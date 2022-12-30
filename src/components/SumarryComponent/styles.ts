import styled from 'styled-components';

export const SumarryContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

export const SumarryItem = styled.article<{ primary?: boolean }>`
display: flex;
    flex-direction: column;
    background: ${({ theme, primary = true }) => primary ? theme['gray-600'] : theme['green-700']};
    padding: 1.5rem;
    border-radius: 8px;

    > header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.25rem;

      > h4 {
        font-weight: 400;
        color: ${({ theme }) => theme['gray-300']};
      }

    }
    > strong {
      font-size: 2rem;
    }
`