# swapi-lab
# api’s
SWAPI

1. https://swapi.dev/api/people/4/
2. https://swapi.dev/api/planets/2
3. https://swapi.dev/api/starships/10
4. https://swapi.dev/api/people/2
	1. https://swapi.dev/api/species/2/
5. https://swapi.dev/api/people/10
	1. “https://swapi.dev/api/films/1/“
	2. “https://swapi.dev/api/films/2/“
	3. “https://swapi.dev/api/films/3/“
	4. “https://swapi.dev/api/films/4/“
	5. “https://swapi.dev/api/films/5/“
	6. “https://swapi.dev/api/films/6/“
6. https://swapi.dev/api/starships/?search=millennium+falcon
	1. https://swapi.dev/api/starships/?search=YT-1300+light+freighter

---

Social Mountain API

1. The post request accepts a body. It expects to be sent a value of `text`
2. A get quest returns JSON
3. https://practiceapi.devmountain.com/api/posts?id=555
4. https://practiceapi.devmountain.com/api/posts/filter?text=hello
	1. Response: 200: Returns an array of filtered posts
	2. Response: 409: Request query is missing required text property.
5. https://practiceapi.devmountain.com/api/posts/
	1. Body: {“text”: “Bryce”}
	2. Response: {“id":960,"text":"bryce","date":"04 May 2022"}
6. https://practiceapi.devmountain.com/api/posts?id=960
	1. Body: {“text": "my favorite color is blue"}
	2. Response:  {“id”: 960, “text”: “my favorite color is blue”, “date”: “04 May 2022”}
7. https://practiceapi.devmountain.com/api/posts/filter?text=blue
8. Application/json, utf-8
9. When you don’t include an id of the post to edit, or you don’t include a body for what to edit the post with. You get the following response: Request is missing either required id in the query or text in the body.
10. It just runs its normal functionality because it doesn’t take a query, so it will do nothing with the query and then return the normal response, which is all of the values in the api

---
