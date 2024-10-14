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

![feature-importance-analysis](https://github.com/kochlisGit/ProphitBet-Soccer-Bets-Predictor/blob/main/screenshots/importance.png)

# Review Length Distribution

Many reviews are under 50 characters and are evenly distributed.


![class distribution](https://github.com/kochlisGit/ProphitBet-Soccer-Bets-Predictor/blob/main/screenshots/targets.png)

# Word Frequency Analysis

The analysis of reviews showed that "child" had the highest frequency.

# Sentiment Analysis

Using the Korean BERT model, we found that there are many positive reviews.

# Topic Modeling

When using the LDA model, "child," "time," and "visit" were identified as significant topics.





