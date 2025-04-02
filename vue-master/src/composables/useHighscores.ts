import axios from 'axios'
import { getJwtToken } from '@/composables/useJwt'

const getTopScores = async () => {
    const token = await getJwtToken()

    const res = await axios.get(import.meta.env.VITE_API_BASE_URL + '/scores?itemsPerPage=5', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })


    const entries = res.data.member
    if (!entries || !Array.isArray(entries)) {
        return []
    }


    const result = await Promise.all(entries.map(async (scoreItem: any) => {
        const playerRes = await axios.get(import.meta.env.VITE_API_BASE_URL + scoreItem.player, {
            headers: { Authorization: `Bearer ${token}` }
        })
        return {
            playerName: playerRes.data.name,
            score: scoreItem.score.toString(),
        }
    }))

    console.log('MAPPED result:', result)
    return result
}

export const useHighscores = () => {
    return {
        getTopScores
    }
}
