# Text Mining-Based Analysis of Tourist Reviews in Seoul
By analyzing reviews of tourist attractions in Seoul, we aim to understand the characteristics of these attractions and provide information to tourists.
What are the elements that visitors rate most positively?

# Data Collection Method

Naver Place Reviews,

* Data Types: Text reviews, number of visits, visit dates, author information, tourist attractions, operating hours, ratings, location, daily visitor count

Tools:

* BeautifulSoup: A Python library used to extract data from HTML and XML documents.
* Selenium: A tool for automating web browsers to collect data from dynamic web pages.
* Refinement and Normalization: Used with Selenium to automate the Google Chrome browser.
![image](https://github.com/LEEJAEYONG-97/portfolio/blob/dd2d2a56ddce3457097b49afaefd827964df412d/app/static/assets/img/%EB%A6%AC%EB%B7%B0%20%EC%BA%A1%EC%B2%982.png)
![image alt](https://github.com/LEEJAEYONG-97/portfolio/blob/4642150dc6cb18c07a6c9122f0f9038236b52657/app/static/assets/img/%EB%A6%AC%EB%B7%B0%20%EC%BA%A1%EC%B2%98.png)
![image2](https://github.com/LEEJAEYONG-97/portfolio/blob/5f895857ba9189f1b1c950e016cf4d3267e19425/app/static/assets/img/%EB%A6%AC%EB%B7%B0%20%EC%BA%A1%EC%B2%983.png)

# Data Preprocessing Steps

1. **Text Cleaning**: Remove unnecessary characters.
2. **Tokenization**: Split sentences into words.
3. **Refinement and Normalization**: Remove stop words and perform morphological analysis.

# Analysis Methodology

1. **Exploratory Data Analysis (EDA)**: Analyze average ratings and number of reviews. Analyze word frequency using Pandas, Seaborn, and Matplotlib.
2. **Sentiment Analysis**: Utilize a Korean BERT model from Hugging Face for sentiment classification (positive/negative).
3. **Topic Modeling**: Use LDA (Latent Dirichlet Allocation) model to identify the main topics in the review data.
4. **Word Cloud**: Visualize the most frequently used words in the review data using a Word Cloud.

# Models

1. **Korean BERT Model**: A pre-trained language model that demonstrates very strong performance in the field of Natural Language Processing (NLP). Developed by Google, it excels in understanding context.
2. **LDA Model**: Models each topic as a probability distribution of words. It is used to uncover hidden topics in text data. Specific topics are understood as sets of words that have a high probability of occurrence together.
It employs non-parametric Bayesian methods, such as Gibbs sampling, to infer topics. The process involves iterative sampling while considering the number of topics and words.



# Analysis of Tourist Ratings and Reviews

Most well-known tourist attractions have high ratings.

![image3](https://github.com/LEEJAEYONG-97/portfolio/blob/5f895857ba9189f1b1c950e016cf4d3267e19425/app/static/assets/img/%ED%8F%89%EC%A0%90.png)

# Review Length Distribution

Many reviews are under 50 characters and are evenly distributed.

![image4](https://github.com/LEEJAEYONG-97/portfolio/blob/5f895857ba9189f1b1c950e016cf4d3267e19425/app/static/assets/img/%EB%A6%AC%EB%B7%B0%EA%B8%B8%EC%9D%B4.png)


# Word Frequency Analysis

The analysis of reviews showed that "child" had the highest frequency.

![image5](https://github.com/LEEJAEYONG-97/portfolio/blob/5f895857ba9189f1b1c950e016cf4d3267e19425/app/static/assets/img/%EB%8B%A8%EC%96%B4%EB%B9%88%EB%8F%84%EC%88%98.png)

# Sentiment Analysis

Using the Korean BERT model, we found that there are many positive reviews.

![image6](https://github.com/LEEJAEYONG-97/portfolio/blob/5f895857ba9189f1b1c950e016cf4d3267e19425/app/static/assets/img/%EA%B0%90%EC%84%B1%EB%B6%84%EC%84%9D.png)

# Topic Modeling

When using the LDA model, "child," "time," and "visit" were identified as significant topics.

![image7](https://github.com/LEEJAEYONG-97/portfolio/blob/5f895857ba9189f1b1c950e016cf4d3267e19425/app/static/assets/img/%EC%A3%BC%EC%A0%9C%20%ED%86%A0%ED%94%BD.png)

# Wordcolud

![image9](https://github.com/LEEJAEYONG-97/portfolio/blob/5f895857ba9189f1b1c950e016cf4d3267e19425/app/static/assets/img/%EC%9B%8C%EB%93%9C%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C.png)

# Map

![image8](https://github.com/LEEJAEYONG-97/portfolio/blob/5f895857ba9189f1b1c950e016cf4d3267e19425/app/static/assets/img/%EC%A7%80%EB%8F%84.png)

# Web
![image10](https://github.com/LEEJAEYONG-97/portfolio/blob/5f895857ba9189f1b1c950e016cf4d3267e19425/app/static/assets/img/%EC%9B%B9%EA%B5%AC%ED%98%84.png)
![image11](https://github.com/LEEJAEYONG-97/portfolio/blob/5f895857ba9189f1b1c950e016cf4d3267e19425/app/static/assets/img/%EC%9B%B9%EA%B5%AC%ED%98%843.png)
![image12](https://github.com/LEEJAEYONG-97/portfolio/blob/5f895857ba9189f1b1c950e016cf4d3267e19425/app/static/assets/img/%EC%9B%B9%EA%B5%AC%ED%98%844.png)
