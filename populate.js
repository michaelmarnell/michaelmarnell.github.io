const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );

var indices = randomIntArrayInRange(0,20,10); // [23, 233, 255, 9831, 12, 5, 298, 444, 2088, 1678] 2702

// Now need to use the indices to make a 10 long list of movies


// const mydata = require('./moviedata.json');

var mydata = [];

fetch('./moviedata.json').then(response => mydata = response.json())


// var mydata = [{"title": "2 or 3 Things I Know About Her", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/7f3c2a49-bbf3-42df-962d-c019a51aa899.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Jean-Luc Godard \u2022 1967 \u2022 France\nStarring Marina Vlady, Anny Duperey, Joseph Gerhard", "desc": "In 2 OR 3 THINGS I KNOW ABOUT HER (2 OU 3 CHOSES QUE JE SAIS D\u2019ELLE), Jean-Luc Godard beckons us ever closer, whispering in our ears as narrator. About what? Money, sex, fashion, the city, love, language, war: in a word, everything. Among the legendary French filmmaker\u2019s finest achievements, the film takes as its ostensible subject the daily life of Juliette Janson (Marina Vlady), a housewife from the Paris suburbs who prostitutes herself for extra money. Yet this is only a template for Godard to spin off into provocative philosophical tangents and gorgeous images. 2 OR 3 THINGS I KNOW ABOUT HER is perhaps Godard\u2019s most revelatory look at consumer culture, shot in ravishing widescreen color by Raoul Coutard.", "link": "https://www.criterionchannel.com/2-or-3-things-i-know-about-her"}, {"title": "Les 3 boutons", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/849abf26-8aea-4908-9aaa-bb6a1d4be8dd.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Agn\u00e8s Varda \u2022 2015 \u2022 France\nStarring Jasmine Thir\u00e9, Michel Jeann\u00e8s, Jacky Patin", "desc": "A billowing pink dress launches a stouthearted teenage girl on a time- and space-collapsing odyssey from her humble goat farm to the big city and beyond in this playfully meandering feminist fantasia from Agn\u00e8s Varda. Commissioned by Italian high-fashion house Miu Miu and shot in part on Varda\u2019s beloved Parisian home street, rue Daguerre, LES 3 BOUTONS slyly juxtaposes the ancient and the modern, the pastoral and the urban, the real and the imaginary to create a fairy tale rooted not in passive wish fulfillment but in spirited self-empowerment.", "link": "https://www.criterionchannel.com/les-3-boutons"}, {"title": "4 Quarters", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/26bb8844-b0a6-4432-91ae-45d88acc5a59.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Ashley McKenzie \u2022 2015 \u2022 Canada\nStarring Sofia Banzhaf, Andrew Gillis", "desc": "An overworked student finds his life thrown into chaos when he gets involved with a young drug addict.", "link": "https://www.criterionchannel.com/4-quarters"}, {"title": "The VI Olympic Winter Games, Oslo 1952", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/67a36bed-5c8d-4b40-a913-b32040737f71-a8621cbc.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Tancred Ibsen \u2022 1952 \u2022 Norway", "desc": "Director Tancred Ibsen's penchant for depicting rustic life shines through in the bucolic scenes at the start of THE VI OLYMPIC WINTER GAMES, OSLO 1952. In addition to the exciting scenes of competition (Winter sports are followed with almost rabid fervor in Scandinavia), Ibsen records a sense of community spirit shared among the competitors.", "link": "https://www.criterionchannel.com/the-vi-olympic-winter-games-oslo-1952"}, {"title": "7 p., cuis., s. de b. . . . (\u00e0 saisir)", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/fc7d6735-057e-4b63-b8f9-0b1c3a224133-aa5839d0.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Agn\u00e8s Varda \u2022 1984 \u2022\u00a0France\nStarring Louis Bec, Colette Bonnet, Yolande Moreau", "desc": "An ensemble performs a bizarre parody of domesticity at an abandoned Avignon hospice center in this richly surrealist experimental work.", "link": "https://www.criterionchannel.com/7-p-cuis-s-de-b-a-saisir"}, {"title": "8\u00bd", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/850f2687-28dc-4968-9af2-c728adcc3812-4fea7797.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Federico Fellini \u2022 1963 \u2022 Italy\nStarring Marcello Mastroianni, Bruno Agostini, Sandra Milo", "desc": "Marcello Mastroianni plays Guido Anselmi, a director whose new project is collapsing around him, along with his life. One of the greatest films about film ever made, Federico Fellini\u2019s 8\u00bd (Otto e mezzo) turns one man\u2019s artistic crisis into a grand epic of the cinema. An early working title for 8\u00bd was THE BEAUTIFUL CONFUSION, and Fellini\u2019s masterpiece is exactly that: a shimmering dream, a circus, and a magic act.", "link": "https://www.criterionchannel.com/81-2"}, {"title": "8th Continent", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/01b72541-3b52-4f2c-b913-553724bf8012.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Yorgos Zois \u2022 2017 \u2022 Greece\nStarring Pavlos Iordanopoulos", "desc": "This haunting meditation on the the European refugee crisis surveys the Greek island of Lesbos, where thousands of life jackets have washed ashore to create an otherworldly landscape that silently conveys the devastating magnitude of a humanitarian tragedy.", "link": "https://www.criterionchannel.com/8th-continent"}, {"title": "The IX Olympiad in Amsterdam", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/af2c6be5-af0c-4de1-9269-663842514223-fbcd13cf.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "1928 \u2022 Italy", "desc": "Made by Istituto Luce, the Italian film company controlled by Benito Mussolini since 1925, THE IX OLYMPIAD IN AMSTERDAM may, understandably, highlight Italian participants, but it is the first Olympic documentary that describes the techniques of certain events with useful particulars.", "link": "https://www.criterionchannel.com/the-ix-olympiad-in-amsterdam"}, {"title": "IX Olympic Winter Games, Innsbruck 1964", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/c8c980bf-bcb1-479c-adc1-26f2d8775ccc-c5d8cbe6.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Theo H\u00f6rmann \u2022 1964 \u2022 Austria", "desc": "Joy and good humor pervades Theo H\u00f6rmann's documentary record of the 1964 Games in Austria. Shot in Agfacolor, it nurtures a folkloric image of Tyrol, with its quaint mountain farms and obligatory yodeling. H\u00f6rmann deploys shots from a helicopter to present the landscape of Tyrol but also to show the skills of the athletes.", "link": "https://www.criterionchannel.com/ix-olympic-winter-games-innsbruck-1964"}, {"title": "11'09\"01\u2014September 11", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/5f27e870-4b23-481d-b066-6eebd6e4e665.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Mira Nair \u2022 2002 \u2022 United States", "desc": "Based on events surrounding the September 11, 2001, disappearance of Salman Hamdani, a young Pakistani American man from Queens, this film portrays his mother\u2019s struggle with terrorist allegations, her own fears, and her son\u2019s fate that day.", "link": "https://www.criterionchannel.com/11-09-01-september-11"}, {"title": "12 Angry Men", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/02ef6c8c-a74f-4d49-ab3a-86ad67550ba3-21a4280c.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Criterion Collection Edition #591", "desc": "12 ANGRY MEN, by Sidney Lumet, may be the most radical courtroom drama in cinema history. A behind-closed-doors look at the American legal system that is as riveting as it is spare, this iconic adaptation of Reginald Rose\u2019s teleplay stars Henry Fonda as the dissenting member on a jury of white men ready to pass judgment on a Puerto Rican teenager charged with murdering his father. The result is a saga of epic proportions that plays out over a tense afternoon in one sweltering room. Lumet\u2019s electrifying snapshot of 1950s America on the verge of change is one of the great feature film debuts.", "link": "https://www.criterionchannel.com/12-angry-men"}, {"title": "13 Days in France", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/bd37a308-a6e6-4e1b-8aad-a78d147f0456-0c36a812.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Claude Lelouch and Fran\u00e7ois Reichenbach \u2022 1968 \u2022 France", "desc": "13 DAYS IN FRANCE, a personal project for French filmmaker Claude Lelouch, approaches the X Olympic Winter Games in a radical way, ignoring certain disciplines and dwelling on others. This impressionistic kaleidoscope of a movie manages to be both freewheeling and intimate. Under the direction of Lelouch and Fran\u00e7ois Reichenbach, 13 DAYS IN FRANCE pulses with the insouciant spirit of the sixties and the carefree cinematography and editing pioneered by the French New Wave.", "link": "https://www.criterionchannel.com/13-days-in-france"}, {"title": "XIVth Olympiad: The Glory of Sport", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/be9359bf-2f68-4ccb-8cba-f38018ee9bf5-f3561ad5.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Castleton Knight \u2022 1948 \u2022 United Kingdom", "desc": "The official film of the Games of the XIV Olympiad London 1948 is the first in color and seeks to comprise both the winter and summer events from that year. The coverage of the sports cannot be faulted, as cinematographer Stanley Sayer marshaled his team of cameramen with a keen eye and deft precision.", "link": "https://www.criterionchannel.com/xivth-olympiad-the-glory-of-sport"}, {"title": "16 Days of Glory", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/65e08e04-663e-411a-abea-e6eb25fecc32-57ec3ace.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Bud Greenspan \u2022 1986 \u2022 United States", "desc": "Director Bud Greenspan, whose career covering sporting events had begun some twenty years earlier, seized the opportunity to helm the official film of the 1984 Los Angeles Olympics with such gusto that he would become the IOC's go-to person for Olympic movies. And this 284-minute record of the 1984 Games set the tone for his nine Olympic films to come. 16 DAYS OF GLORY is audacious and fresh and springs from a fascination with the energy and ambition that drive the finest athletes.", "link": "https://www.criterionchannel.com/16-days-of-glory"}, {"title": "21 Days", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/cb5ce954-68ca-4390-a698-aa918170b2eb.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Basil Dean \u2022 1940 \u2022 Great Britain and United States", "desc": "Larry accidentally kills Wanda's husband and as a result their love is now unencumbered, except that a man has been falsely accused of the crime. Larry has 21 days to act before that man goes to the gallows, but will he?", "link": "https://www.criterionchannel.com/21-days"}, {"title": "24 Frames", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/50e4655b-7428-4b8f-aa69-89e28b96e5f5-7f883b01.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Abbas Kiarostami \u2022 2017 \u2022 Iran", "desc": "For what would prove to be his final film, Iranian director Abbas Kiarostami gave himself a challenge: to create a dialogue between his work as a filmmaker and his work as a photographer, bridging the two art forms to which he had dedicated his life. Setting out to reconstruct the moments immediately before and after a photograph is taken, Kiarostami selected twenty-four still images\u2014most of them stark landscapes inhabited only by foraging birds and other wildlife\u2014and digitally animated each one into its own subtly evolving four-and-a-half-minute vignette, creating a series of poignant studies in movement, perception, and time. A sustained meditation on the process of image making, 24 FRAMES is a graceful and elegiac farewell from one of the giants of world cinema.", "link": "https://www.criterionchannel.com/24-frames"}, {"title": "24 Frames per Second", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/5c6d7e1c-7a73-47ea-843e-37051768847b-aa263483.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Shirley Clarke \u2022 1977 \u2022 United States", "desc": "This short film was commissioned by the Los Angeles Museum of Art to complement an exhibit on Persian art. Focused on the beauty within textiles, 24 FRAMES PER SECOND illustrates director Shirley Clarke\u2019s eye for detail.", "link": "https://www.criterionchannel.com/24-frames-per-second"}, {"title": "24 Hours in the Life of a Clown", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/ab3d662a-ed3c-40c8-9bd0-a57227227982.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Jean-Pierre Melville \u2022 1946 \u2022 France", "desc": "Jean-Pierre Melville's first directorial effort was this 1946 short film about a clown and his partner, who find inspiration one day in the streets for their performance in the circus that night.", "link": "https://www.criterionchannel.com/24-hours-in-the-life-of-a-clown"}, {"title": "38", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/f8884982-dfb8-4f4b-8e08-367878c4c97b.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Micaela Durand and Daniel Chew \u2022 2021 \u2022\u00a0United States\nStarring Curie Choi, Alicia Novella Vasquez", "desc": "Vivid interruptions of sound and images fragment the psychic landscape of a thirty-eight-year-old woman who becomes obsessed with the social-media presence of the young woman who broke up her relationship. The latest entry in Daniel Chew and Micaela Durand\u2019s ongoing examination of the embodied experience of our hybrid online-IRL existence, 38 mines contemporary life\u2019s nuanced exchanges between longing and looking, voyeurism and the desire to be seen.", "link": "https://www.criterionchannel.com/38"}, {"title": "The 39 Steps", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/a04555cd-5c8b-4f97-8cf3-7115d25879fe-400a819e.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Alfred Hitchcock \u2022 1935 \u2022 United Kingdom\nStarring Robert Donat, Madeline Carroll, Lucie Mannheim", "desc": "A heart-racing spy story by Alfred Hitchcock, THE 39 STEPS follows Richard Hannay (Robert Donat) as he stumbles upon a conspiracy that thrusts him into a hectic chase across the Scottish moors\u2014a chase in which he is both the pursuer and the pursued\u2014as well as into an unexpected romance with the cool Pamela (Madeline Carroll). Adapted from a novel by John Buchan, this classic wrong-man thriller from the Master of Suspense anticipates the director\u2019s most famous works (especially NORTH BY NORTHWEST), and remains one of his cleverest and most entertaining films.", "link": "https://www.criterionchannel.com/the-39-steps"}, {"title": "45 Years", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/9379ee33-8288-4007-99a9-c0dd653c440d-bcfecdef.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Andrew Haigh \u2022 2015 \u2022 United Kingdom\nStarring Charlotte Rampling, Tom Courtenay", "desc": "In this exquisitely calibrated film, Charlotte Rampling and Tom Courtenay perform a subtly off-kilter pas de deux as Kate and Geoff, an English couple who, on the eve of an anniversary celebration, find their long marriage shaken by the arrival of a letter to Geoff that unceremoniously collapses his past into their shared present. Director Andrew Haigh carries the tradition of British realist cinema to artful new heights in 45 YEARS, weaving the momentous into the mundane as the pair go about their daily lives, while the evocatively flat, wintry Norfolk landscape frames their struggle to maintain an increasingly untenable status quo. Loosely adapting a short story by David Constantine, Haigh shifts the focus from the slightly erratic Geoff to Kate, eliciting a remarkable, nuanced portrayal by Rampling of a woman\u2019s gradual metamorphosis from unflappable wife to woman undone.", "link": "https://www.criterionchannel.com/45-years"}, {"title": "49th Parallel", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/d2d0a628-c1fb-42c8-a4ae-5e0ca848b50f.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Michael Powell \u2022 1941 \u2022 United Kingdom\nStarring Laurence Olivier, Raymond Massey, Anton Walbrook", "desc": "At once a compelling piece of anti-isolationist propaganda and a quick-witted wartime thriller, 49TH PARALLEL is a classic early work from the inimitable British filmmaking team of Michael Powell and Emeric Pressburger. When a Nazi U-boat crew, headed by the ruthless Eric Portman, is stranded in Canada during the thick of World War II, the men evade capture by hiding out in a series of rural communities, before trying to cross the border into the still-neutral United States. Both soul-stirring and delightfully entertaining, 49TH PARALLEL features a colorful cast of characters played by larger-than-life actors Laurence Olivier, Raymond Massey, Anton Walbrook, and Leslie Howard.", "link": "https://www.criterionchannel.com/49th-parallel"}, {"title": "71 Fragments of a Chronology of Chance", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/b1d75cf0-d974-4273-ac1e-772c610302c2.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Michael Haneke \u2022 1994 \u2022 Austria, Germany\nStarring Gabriel Cosmin Urdes, Lukas Miko, Otto Gr\u00fcmandl", "desc": "The simultaneously random and interconnected nature of modern existence comes into harrowing focus in the despairing final installment of Michael Haneke\u2019s trilogy. Seventy-one intricate, puzzlelike scenes survey the routines of a handful of seemingly unrelated people\u2014including an undocumented Romanian boy living on the streets of Vienna, a couple who are desperate to adopt a child, and a college student on the edge\u2014whose stories collide in a devastating encounter at a bank. The omnipresent drone of television news broadcasts in 71 FRAGMENTS OF A CHRONOLOGY OF CHANCE underscores Haneke\u2019s vision of a numb, dehumanizing world in which emotional estrangement can be punctured only by the shock of sudden violence.", "link": "https://www.criterionchannel.com/71-fragments-of-a-chronology-of-chance"}, {"title": "100 Boyfriends Mixtape", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/31b4a009-5dcd-491f-8344-4164baf20645.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Brontez Purnell \u2022 2016 \u2022\u00a0United States", "desc": "In Brontez Purnell\u2019s \u201cvideo mixtape,\u201d unlikely antihero DeShawn\u2014an HIV-positive Black gay man haunted by the ghosts of 100 men\u2014relates his philosophy of the world to an unknown caller on his landline while magically shrink-fitting a new pair of recently shoplifted jeans.", "link": "https://www.criterionchannel.com/100-boyfriends-mixtape"}, {"title": "The 400 Blows", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/48f7a06c-2c73-4911-9aaa-3f7bfad8fb4e-0fa00587.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Criterion Collection Edition #5", "desc": "Fran\u00e7ois Truffaut\u2019s first feature is also his most personal. Told through the eyes of Truffaut\u2019s cinematic counterpart, Antoine Doinel (Jean-Pierre L\u00e9aud), THE 400 BLOWS sensitively re-creates the trials of Truffaut\u2019s own childhood, unsentimentally portraying aloof parents, oppressive teachers, and petty crime. The film marked Truffaut\u2019s passage from leading critic to trailblazing auteur of the French New Wave.", "link": "https://www.criterionchannel.com/the-400-blows"}, {"title": "499", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/d7733a62-4445-486d-a122-b98e911317a0.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Rodrigo Reyes \u2022 2020 \u2022 Mexico", "desc": "To reflect on the five-hundred-year anniversary of the Spanish conquest of Mexico, director Rodrigo Reyes offers a bold hybrid-cinema experience exploring the brutal legacy of colonialism in contemporary Mexico. Through the eyes of a ghostly conquistador, 499 recreates Hern\u00e1n Cort\u00e9s\u2019s journey from the coasts of Veracruz to the Aztec capital of Tenochtitlan, the site of contemporary Mexico City. As the anachronistic fictional character interacts with real-life victims of Mexico\u2019s failed drug wars and Indigenous communities in resistance, the filmmaker portrays the country\u2019s current humanitarian crisis as part of a vicious and unfinished colonial project, still in motion nearly five hundred years later. Provocative, unique, and strikingly cinematic, 499 mixes nonfictional and performative elements with conventions of the road movie to show how past traumas continue to shape contemporary reality.", "link": "https://www.criterionchannel.com/499"}, {"title": "1968 < 2018 > 2068", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/af89837b-03e0-4bb1-b40f-ae9c19bec32d.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Keisha Rae Witherspoon \u2022 2018 \u2022 United States", "desc": "Drawing on literary excerpts from the book \u201cBlack Quantum Futurism: Theory and Practice,\u201d 1968 < 2018 > 2068 is a meditation on cyclical and linear time theory, memory, and trauma.", "link": "https://www.criterionchannel.com/1968-2018-2068"}, {"title": "2046", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/0fa34bae-bb5f-44aa-895d-58fa8ed895ff.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Wong Kar Wai \u2022 2004 \u2022\u00a0Hong Kong\nStarring Tony Leung Chiu Wai, Gong Li, Faye Wong", "desc": "Wong Kar Wai\u2019s loose sequel to IN THE MOOD FOR LOVE combines that film\u2019s languorous air of romantic longing with a dizzying time-hopping structure and avant-sci-fi twist. Tony Leung Chiu Wai reprises his role as writer Chow Mo-Wan, whose numerous failed relationships with women who drift in and out of his life (and the one who goes in and out of room 2046, down the hall from his apartment) inspire the delirious futuristic love story he pens. 2046\u2019s dazzling fantasy sequences give Wong and two of his key collaborators\u2014cinematographer Christopher Doyle and editor/costume designer/production designer William Chang Suk Ping\u2014license to let their imaginations run wild, propelling the sumptuous visuals and operatic emotions skyward toward the sublime.", "link": "https://www.criterionchannel.com/2046"}, {"title": "ABC Africa", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/44eb0d6b-49ff-4ea9-8d1b-5d191f4061d6.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Abbas Kiarostami \u2022 2001 \u2022\u00a0Iran\nStarring Abbas Kiarostami, Seifollah Samadian", "desc": "In 2000, Abbas Kiarostami traveled to Africa at the request of the United Nations to document a humanitarian crisis unfolding in Uganda, where 1.5 million children had been orphaned by civil war and AIDS. Working outside of Iran and shooting on digital video for the first time, he returned with this disarmingly hopeful look at a country where death hovers ever-present, yet life\u2014embodied by the playful spirit of the kids who peer curiously into his camera\u2019s searching, humane lens\u2014flows on undiminished. Part idiosyncratic travelogue, part ode to childhood wonder, ABC AFRICA is quintessential Kiarostami in its movingly philosophical reflection on human resilience in the face of adversity.", "link": "https://www.criterionchannel.com/abc-africa"}, {"title": "Abigail\u2019s Party", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/8487c7a5-40d6-41ea-9f83-919917aa11dc.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Mike Leigh \u2022\u00a01977 \u2022 United Kingdom\nStarring Alison Steadman, Tim Stern, Janine Duvitski", "desc": "Mike Leigh\u2019s filmed version of his acclaimed stage play is a brilliantly biting comedy of manners that lays bare the bourgeois affectations and sexual frustrations of a young suburban couple. Abigail\u2019s mother, Sue (Harriet Reynolds), is invited to take refuge from her teenage daughter\u2019s party by a neighboring couple, Beverly (Alison Steadman) and Laurence (Tim Stern). They have also invited Angela (Janine Duvitski) and Tony (John Salthouse), new arrivals on the street. As Beverly plies her guests with alcohol, Sue becomes increasingly withdrawn and embarrassed by the pretentious goings-on\u2014with marital tensions gradually revealing the cracks in the delusional facade.", "link": "https://www.criterionchannel.com/abigail-s-party"}, {"title": "About Tap", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/265208c0-fc6b-4698-9127-f7ac84dc4965.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by George T. Nierenberg \u2022 1985 \u2022 United States", "desc": "George T. Nierenberg\u2019s brilliant and blissful followup to NO MAPS ON MY TAPS is introduced by legendary dancer Gregory Hines, who shares his childhood memories of watching and imitating the tap-dance greats at the Apollo Theater. ABOUT TAP features performances by and recollections from three of America\u2019s leading male tap dancers: Steve Condos, Jimmy Slyde, and Chuck Green. Condos thinks of himself as an instrumentalist who focuses on the ankles and feet; Jimmy Slyde talks of \u201cvisual dancers\u201d who \u201call make pictures\u201d; and Chuck Green advises using the balletic port de bras technique. Each dancer provides his personal answer to the question, \u201cHow does an artist discover their own individual style?\u201d", "link": "https://www.criterionchannel.com/about-tap"}, {"title": "The Above", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/95ca67a9-3e54-41ad-85e9-f8672c8f401d.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Kirsten Johnson \u2022 2015 \u2022 United States", "desc": "This 2015 short film by Kirsten Johnson was commissioned by Field of Vision, a filmmaker-driven visual journalism unit that pairs directors with developing stories around the globe. In THE ABOVE, a U.S. military surveillance balloon floats on a tether high about Kabul, Afghanistan. Its capacities are highly classified and deeply mysterious.", "link": "https://www.criterionchannel.com/the-above"}, {"title": "Abuse of Weakness", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/c51f5fa0-b671-4a31-adc7-c3e197d860c9.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Catherine Breillat \u2022 2013 \u2022 France\nStarring Isabelle Huppert, Kool Shen, Laurence Ursino", "desc": "Inspired by director Catherine Breillat\u2019s real-life experiences, ABUSE OF WEAKNESS is a daring exploration of power and sex from a director fearlessly confronting her own demons. Isabelle Huppert stars as Maud, a strong-willed filmmaker whose world is turned upside down when she suffers a stroke. Bedridden but determined to pursue her latest film project, she sees Vilko (Kool Shen), a con man who swindles celebrities, on a TV talk show. Interested in him for her new film, Maud arranges to meet him and soon finds herself falling for Vilko\u2019s manipulative charm as their parasitic relationship spirals out of control.", "link": "https://www.criterionchannel.com/abuse-of-weakness"}, {"title": "Les abysses", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/10e58430-3076-40d9-af07-6478828745b7-c0ff2ab3.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Nico Papatakis \u2022\u00a01963 \u2022\u00a0France\nStarring Francine Berg\u00e9, Colette Berg\u00e9, Pascale de Boysson", "desc": "Inspired by the notorious case of Christine and L\u00e9a Papin\u2014French sisters working as maids who murdered their employer\u2019s wife and daughter in 1933\u2014Nico Papatakis\u2019s debut feature was a succ\u00e8s de scandale that was boycotted by Cannes\u2019s selection committee in 1963. A furiously anarchic, expressionistically heightened dissection of class relations, LES ABYSSES unfolds in a country home where domestic servants Mich\u00e8le and Marie-Louise (played by real-life sisters Francine and Colette Berg\u00e9) are cruelly exploited by the family they work for. When their abusive employers push them too far, it provokes a shocking rebellion that doubles as a provocative metaphor for Algerian resistance against French colonialism.", "link": "https://www.criterionchannel.com/les-abysses"}, {"title": "Accattone", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/d63f8f7e-27fc-42e8-bba0-eaed4eca2557.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Pier Paolo Pasolini \u2022 1961 \u2022\u00a0Italy\nStarring Franco Citti, Franca Pasut, Silvana Corsini", "desc": "Poet and painter turned filmmaker Pier Paolo Pasolini courted controversy with his very first feature by using Catholic iconography and liturgical music to render a plaintive, brutally beautiful portrait of a shiftless Roman pimp and thief (then-nonprofessional Franco Citti, in a revelatory performance) whose life of petty crime turns increasingly desperate when the woman who supports him is imprisoned. Melding a hardscrabble neorealist milieu with classical influences, Pasolini offers a vision of underclass struggle as a kind of modern sainthood.", "link": "https://www.criterionchannel.com/accattone"}, {"title": "Acera, or The Witches\u2019 Dance", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/a3b0c1b9-76da-48e2-a824-ed68e874ebab-94fc95e2.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Jean Painlev\u00e9 \u2022 1972 \u2022 France", "desc": "The lives of miniscule mollusks are intimately captured as they wallow in mud, mate and give birth. Director Jean Painlev\u00e9 sublimely sets their dance like movements to music.", "link": "https://www.criterionchannel.com/acera-or-the-witches-dance"}, {"title": "Acid Rain", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/117e0196-6390-472f-bb62-9a994cb603f7.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Tomek Popakul \u2022 2019 \u2022\u00a0Poland\nStarring Daria Bulka, Piotr Bulka", "desc": "A young drifter\u2019s journey through Poland\u2019s 1990s rave scene goes from hallucinogenic to harrowing in this Day-Glo-drenched animated odyssey.", "link": "https://www.criterionchannel.com/acid-rain"}, {"title": "Acting Our Age", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/bafa874d-2ecf-4626-a2b0-019438cd096c.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Gurinder Chadha \u2022 1992 \u2022 United Kingdom", "desc": "This humorous and thought-provoking film documents the residents of a South Asian home for the elderly in Britain. Director Gurinder Chadha assists the residents in directing their own video. The result is an examination of politics, ageism, and cross-cultural communication in contemporary British society. Interview subjects range from people on the street to members of Parliament. The film ends with the triumphant screening of the group\u2019s completed film.", "link": "https://www.criterionchannel.com/acting-our-age"}, {"title": "An Actor\u2019s Revenge", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/06ac85d6-872b-48d5-9924-e588c4a93830.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Kon Ichikawa \u2022 1963 \u2022 Japan", "desc": "A kabuki actor who only plays female characters encounters the three men who drove his parents to suicide and plans his revenge.", "link": "https://www.criterionchannel.com/an-actor-s-revenge"}, {"title": "\u00c5dalen 31", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/b1f828cf-5df8-4c5b-a038-512673745909.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by Bo Widerberg \u2022\u00a01969 \u2022 Sweden\nStarring Peter Schildt, Kerstin Tidelius, Roland Hedlund", "desc": "One of Bo Widerberg\u2019s most explicitly political works imbues the true story of a 1931 labor strike with a powerful contemporary resonance. In the industrial district of \u00c5dalen, in the north of Sweden, a peaceful demonstration takes a tragic turn, leading to a historic general strike. Amid these events, the teenage Kjell (Peter Schildt) experiences sacrifice and strife, love and loss, and the consequences of this shocking violence. Working once again with ELVIRA MADIGAN cinematographer J\u00f6rgen Persson\u2014who captures shimmering, light-filled images in graceful widescreen\u2014Widerberg entwines a stirring portrait of resistance with an intimate coming-of-age journey for a vision of history that feels vibrantly, urgently alive.", "link": "https://www.criterionchannel.com/adalen-31"}, {"title": "Adam\u2019s Rib", "image": "https://vhx.imgix.net/criterionchannelchartersu/assets/fa609c85-1f18-4085-a612-951ad545bfd9.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640", "meta": "Directed by George Cukor \u2022 1949 \u2022\u00a0United States\nStarring Katharine Hepburn, Spencer Tracy, Judy Holliday", "desc": "Spencer Tracy and Katharine Hepburn match wits as a husband-and-wife team of attorneys representing opposite sides of a case in this classic romantic comedy. To attorney Adam Bonner (Tracy), it\u2019s an open-and-shut case when a woman (Judy Holliday) is arrested for attempting to kill her husband after she discovers him with his mistress. But Adam\u2019s wife, Amanda (Hepburn), believes that it would be a case of justifiable attempted homicide if the husband had discovered his wife in an affair. So begins a courtroom battle of the sexes for the ages, brilliantly scripted by husband-and-wife team Garson Kanin and Ruth Gordon, who wrote the sparkling screenplay specifically for Tracy and Hepburn.", "link": "https://www.criterionchannel.com/adam-s-rib"}];



var movies = [];

for (i = 0; i < 10; i++) {
    movies.push(mydata[indices[i]])
};

function addRow(image, title, meta, desc, link)
{
    var tableBody = document.getElementById('myTableBody');
    var newRow = tableBody.insertRow(tableBody.rows.length);
    var imageCell = newRow.insertCell(0);
    var titleCell = newRow.insertCell(1);
    var metaCell = newRow.insertCell(2);
    var descCell = newRow.insertCell(3);
    var linkCell = newRow.insertCell(4);
    const img = document.createElement("img");
    img.src = image;
    var titleText = document.createTextNode(title);
    var metaText = document.createTextNode(meta);
    var descText = document.createTextNode(desc);
    var linkText = document.createTextNode(link);
    imageCell.appendChild(img);
    titleCell.appendChild(titleText);
    metaCell.appendChild(metaText);
    descCell.appendChild(descText);
    linkCell.appendChild(linkText);
};

movies.forEach(function(listItem){
    addRow(listItem.image, listItem.title, listItem.meta, listItem.desc, listItem.link)
});
