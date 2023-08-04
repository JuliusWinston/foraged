const url: string = "http://localhost:8080/api/streak-counter"

const countStreak = async (data: URLSearchParams): Promise<{longestStreak: number}> => {
  const longestStreak = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: data,
  })

  const response = await longestStreak.json()
  
  return response
}

export default countStreak