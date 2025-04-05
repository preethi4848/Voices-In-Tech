
import { Article } from "../types/article";

export async function fetchWeCodedArticles(): Promise<Article[]> {
  try {
    const response = await fetch('https://dev.to/api/articles?tag=wecoded&per_page=12');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching WeCoded articles:', error);
    return [];
  }
}

export async function fetchSheCodedArticles(): Promise<Article[]> {
  try {
    const response = await fetch('https://dev.to/api/articles?tag=shecoded&per_page=8');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching SheCoded articles:', error);
    return [];
  }
}
