import styled from 'styled-components';

export const SumarryContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

export const SumarryItem = styled.article<{ color?: 'gray' | 'green' | 'red' }>`
display: flex;
    flex-direction: column;
    background: ${({ theme, color = 'gray' }) => color === 'gray' ? theme['gray-600'] : color === 'green' ? theme['green-700'] : theme['red-500']};
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