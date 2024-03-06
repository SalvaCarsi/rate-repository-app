import { View } from 'react-native'

import StyledText from './StyledText'

const parseThousands = (value) => {
  return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value)
}

const RepositoryStats = (item) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <View>
        <StyledText fontWeight="bold" align="center">
          {parseThousands(item.stargazersCount)}
        </StyledText>
        <StyledText align="center">Stars</StyledText>
      </View>
      <View>
        <StyledText fontWeight="bold" align="center">
          {parseThousands(item.forksCount)}
        </StyledText>
        <StyledText align="center">Forks</StyledText>
      </View>
      <View>
        <StyledText fontWeight="bold" align="center">
          {item.reviewCount}
        </StyledText>
        <StyledText align="center">Review</StyledText>
      </View>
      <View>
        <StyledText fontWeight="bold" align="center">
          {item.ratingAverage}
        </StyledText>
        <StyledText align="center">Rating</StyledText>
      </View>
    </View>
  )
}

export default RepositoryStats
