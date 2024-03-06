import { View } from 'react-native'

import StyledText from './StyledText'

const parseThousands = (value) => {
  return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value)
}

const RepositoryStats = (item) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <View>
        <StyledText fontWeight="bold">Stars</StyledText>
        <StyledText align="center">
          {parseThousands(item.stargazersCount)}
        </StyledText>
      </View>
      <View>
        <StyledText fontWeight="bold">Forks</StyledText>
        <StyledText align="center">
          {parseThousands(item.forksCount)}
        </StyledText>
      </View>
      <View>
        <StyledText fontWeight="bold">Review</StyledText>
        <StyledText align="center">{item.reviewCount}</StyledText>
      </View>
      <View>
        <StyledText fontWeight="bold">Rating</StyledText>
        <StyledText align="center">{item.ratingAverage}</StyledText>
      </View>
    </View>
  )
}

export default RepositoryStats
