import { servicesList } from "./menu-list";
import Img1 from "@/assets/images/service-hero.png";
import sectionImg2 from "@/assets/images/serviceImg2.png";
import sectionImg3 from "@/assets/images/serviceImg3.jpg";
import Sr2 from "@/assets/images/service2.jpg"
import Sr3 from "@/assets/images/service3.png"
import Sr4 from "@/assets/images/service4.jpg"

export const servicesDatas = [
    // 1
    {
        // serviceName: "Comprehensive Home Care Service",
        serviceName: servicesList[0],
        data: {
            section1: {
                heading: "Comprehensive Home Care Service",
                desc: `Finding home care and nursing care services that meets your loved one’s needs can be challenging. At One to One health, it’s our mission to provide the most comprehensive home health services for seniors in your area. We design a care plan that provides the personalized support and assistance they'll need to remain independent and continue living a fun, fulfilling life as they age. </br>
                    Ready to see what Happier Aging® is all about? </br>
                    
                    Contact us to set up a care consult today.`,
                img: Img1.src
            },
            section2: {
                heading: "From personal care to nursing care, find perfect caregivers with One-On-One",
                desc: `Whether your loved one requires light help around the home or more specialized care for chronic conditions—our amazing senior care team is here to support you every step of the way. We’ll guide you through the entire home health care process and work closely with you and other family members to help you find a person who deeply understands your loved one’s needs, matches their personality, and brings joy to their day.`,
            },
            section3: {
                heading: "In home care services built around you",
                desc: `Our comprehensive in home care team will ask you about what you love to do most during the day so we can factor your hobbies of choice into your care plan. Do you like attending a weekly pottery class or going for a walk with your friends every morning? Your caregiver can accompany you and arrange for transportation to and from your favorite activities. Do you have family coming for a holiday dinner and need assistance with preparing the ham and stuffing? Your caregiver will be ready to assist you with your groceries, selecting the perfect bouquet of flowers, menu organizing, and setting the table prior to your guests’ arrival.</br>
                        Our professional caregivers and nurses provide different types of support based on clients’ individual needs. Our home care services can include:`,
                img: sectionImg2.src,
                cards: [
                    {
                        title: "Personal Care Services:",
                        desc: "Grooming, bathing assistance, dressing, and other personal care and self care activities."
                    },
                    {
                        title: "Nursing Care Services:",
                        desc: "Monitoring illness, medication reminders, around-the-clock care, physical therapy, and more specialized services."
                    },
                    {
                        title: "Other Home Care Services:",
                        desc: "Meal preparation, light housekeeping, grocery shopping, transportation, companion care, and family caregivers respite services."
                    },
                ]
            },
            section4: {
                twoCol: true,
                cols: [
                    {
                        heading: "The benefits of in home care services",
                        desc: "One to One Health simplifies home care administration by pairing you with a dedicated care manager. They coordinate care, communication, and planning between your family, care team, doctors, and healthcare providers, easing the stress of senior care and supporting short- and long-term goals."
                    },
                    {
                        heading: "Home health care services you can rely on",
                        desc: "We understand the importance of consistent, reliable caregivers for quality home nursing care. At One to One, we ensure continuity of care with a familiar, dependable team, providing daily support so you can live your life as usual. Our comprehensive home care programs are designed to bring you peace of mind and happiness every day."
                    }
                ]
            }
        }
    },
    // 2
    {
        // serviceName: "In-Home Alzheimer's Care and Dementia Care",
        serviceName: servicesList[1],
        data: {
            section1: {
                heading: "In-Home Alzheimer's Care and Dementia Care",
                desc: `We help clients maintain their dignity by letting them continue their regular routines despite cognitive decline.`,
                img: Sr2.src
            },
            section2: {
                heading: "",
                desc: `Alzheimer’s and related dementias are progressive diseases that worsen over time and affect cognitive functioning. Many seniors with Alzheimer’s also experience Sundowner’s Syndrome.</br>

                  Early signs of these diseases can affect daily functioning as they include memory loss, confusion, difficulty completing familiar tasks, misplacement of items, decreased judgment, withdrawal from social activities and changes in mood or personality.`,
            },
            section3: {
                heading: "Prevent wandering",
                quote: {
                    quote: `Three out of five people with dementia will go missing as some individuals with Alzheimer’s disease may become disoriented when they are outside their home or in unfamiliar surroundings.`,
                    author: `Alzheimer’s Association`
                },
                desc: `Along with preliminary symptoms, there are also substantial risks with Alzheimer’s and related dementias like wandering. To prevent wandering, One-On-One’s priority through its dementia care is clients’ safety and allowing them to receive care in a familiar setting – their own home.`,
                img: Sr2.src,
            },
            sectionCards: {
                cards: [
                    {
                        title: "24/7 Care, Consistent Visits",
                        img: Img1.src,
                        desc: "Our 24/7 dementia care & Alzheimer care service gives you peace of mind and reassurance that your loved one is receiving quality one-on-one care, minimizing any risk or harm to them. Our clients are carefully matched with caregivers based on our expert Care Designer’s assessment. To avoid confusion for clients, we always strive for consistency when sending in caregivers so they can recognize any inconsistencies in a client’s routine and clients are comfortable receiving care from someone they trust."
                    },
                    {
                        title: "Caregivers trained in Dementia care & Alzheimer’s care",
                        img: Img1.src,
                        desc: "Our caregivers are trained in dementia care & Alzheimer’s care so that they can competently deal with Alzheimer’s and related dementia. We recognize that each situation is unique. We understand how Alzheimer’s & dementia can affect clients and their families as it is a difficult process for both. One-On-One provides support and guidance to clients and their families in dealing with ongoing challenges and responsibilities of providing care."
                    },
                    {
                        title: "Relieve Family Members",
                        img: Img1.src,
                        desc: "In many situations, family members often act as caregivers for those with Alzheimer’s and related dementia which causes a stressful environment for both parties. Our goal is to relieve family members and provide respite care so that you never need to worry if your loved one is safe."
                    },
                    {
                        title: "Activities of Daily Living & Independence",
                        img: Img1.src,
                        desc: "Alzheimer’s and related dementia can greatly impact a senior’s daily routine so One-On-One’s goal is to help clients get back to doing what they love. Our caregivers will not only help clients with instrumental activities of daily living (IADLs) and personal activities of daily living (ADLs), but they will also ensure that clients are able to maintain their independence under our caregivers’ supervision."
                    },
                ]
            },
            section4: {
                heading: "Our services include:",
                desc: `Providing techniques to improve communication</br>
                       Coping strategies for family caregivers to deal with challenging behavior's</br>
                       Maintaining a familiar and safe environment with a daily routine</br>
                       Using memory games and activities for mental stimulation</br>
                       Family support through resources, training and educating</br>
                       Providing respite care</br>
                       Personal support services</br>
                       Promoting a physical activity plan`,
                img: sectionImg3.src,
            },
        }
    },
    // 3
    {
        // serviceName: "In-Home Nursing Care",
        serviceName: servicesList[2],
        data: {
            section1: {
                heading: `In-Home Nursing Care`,
                desc: `There’s no place like home. We deeply appreciate how important it is for you to enjoy the comfort of your own home for as long as possible. That’s why we offer in-home nursing care for you including medical support when necessary.`,
                img: Sr3.src
            },
            section2: {
                heading: `In-Home Nursing Care That Brings Balance to Your Life`,
                desc: `As part of our in-home nursing care services program, you have the freedom to maintain your optimal health around familiar sights, sounds, family and friends. All of One-On-One’s Registered Nurses and Licensed/Registered Practical Nurses are carefully selected to match your personality and variety of special interests. Your nurse will support you through around-the-clock care proving you with wonderful company, assisting you in staying in great health and making sure you are as comfortable as possible in your surroundings.`,
            },
            section3: {
                heading: `Qualified, 24 Hour Nursing Care in Your Home`,
                desc: `Ensuring you can continue your personal relationships with your family and circle of friends is one of One-On-One’s top priorities. That’s why our around-the-clock home care program is designed to include open visiting hours for anyone coming to and from your home. Your relations can come and go as they please, join you for a spot of tea or stop-in for mealtime just as they always have.</br>

                    Our licensed care team will be available whenever you need them. From scheduled nursing visits to hourly care, someone will always be there to help you 24 hours a day, seven days a week. We work with your medical team to ensure you’re receiving the highest level of professional support care that you require. It’s our mission to make sure you can continue to live in the comfort of your own home while still receiving the love and support you need.`,
                img: Img1.src,
            },
            section4: {
                heading: `Medical & Non Medical Private Nursing Care Available`,
                desc: `According to a recent study by AARP (American Association of Retired Persons), 90% of seniors prefer at home nursing because they’re able to stay in their own homes for as long as possible. It’s our goal to make this happen for you. That’s why our home care nursing program is an integral part of One-On-One’s services, thoughtfully designed to meet your specific medical and personal needs every step of the way.</br>

                    We understand how important it is for you to maintain your own sense of independence and feel comfortable with the care being provided to you every day. Our senior personal care services team will select an LPN or RN that suits your personal needs best so that your one-on-one care will be as pleasant and as enjoyable as possible.</br>

                    Your safety is also of utmost importance to us. All of One-On-One’s medical caregivers are screened rigorously for you and are highly qualified to provide direct care to you and your loved ones. We recognize self-care tasks such as medical administration and personal hygiene can be a private and sensitive matter, so we ensure you feel at ease and as relaxed as possible with your chosen nurse.`,
            },
        }
    },
    // 4
    {
        // serviceName: "Post Operative Care",
        serviceName: servicesList[3],
        data: {
            section1: {
                heading: `Post Operative Care`,
                desc: `Post operative care services to make sure you or your loved one recovers safely at the comfort of your own home.`,
                img: Sr4.src
            },
            section2: {
                heading: ``,
                desc: `Recovering from surgery can be a stressful time, but it doesn’t have to be. Our in-home nursing care services allow you to focus on recovering in the comfort of your own home, while we take care of a number of your post-operative care needs.</br>
                        One-On-One’s respite programs give you and other family members space away from your caregiving duties to relax, recharge, and come back to the person you care for with more energy and renewed focus. Our respite services are designed to support your wellbeing and strengthen the bond with your loved one when you get back.</br>
                        Whether you need a few hours or a few weeks away, we’re here to provide the in home respite care your loved one needs. Talk to us about respite care services today.`,
            },
            section3: {
                heading: "Post-Operative Care Services",
                desc: `The right care can help make the at-home recovery process as smooth as possible. When being discharged from the hospital, it’s important to have a plan in place – our team of highly trained caregivers work with your medical providers to develop a personalized care plan tailored to your individual situation. Whether you need assistance with the discharge itself, around-the-clock monitoring after you get home or ongoing assistance with daily tasks over a longer-term, we’re here to help you with the highest-quality care along every step of the recovery journey.`,
                img: sectionImg3.src,
            },
            section4: {
                heading: "Post Operative Care Services include:",
                desc: `Working closely with your medical care team to follow any discharge orders</br>
                        Transportation – we can take you to your home after you’ve been discharged from the hospital, and to and from any future appointments</br>
                        We can collect your prescriptions, take care of your grocery shopping and any other errands that you may need help with</br>
                        Medication reminders</br>
                        Help with meal preparation</br>
                        Liaising with healthcare providers and communicating information with your loved ones`,
                img: sectionImg3.src,
            },
        }
    },
    // 5
    {
        // serviceName: "Companionship",
        serviceName: servicesList[4],
        data: {
            section1: {
                heading: "Senior Companionship Care",
                desc: `One-On-One understands you may need help with certain activities and a friend along the way. We recognize that feeling lonely is one of the leading causes of depression in seniors and our goal is to reverse the effects of isolation with senior companionship.`,
                img: Img1.src
            },
            section2: {
                heading: "Caring Senior Companionship Care Services",
                desc: `Your health and happiness is our top priority, which is why your companion care will be compassionately designed to provide you with a comfortable and inspiring environment while you stay in your own home.</br>
                        For many people, companionship can spark their motivation to participate in everyday activities. Cooking and eating are more enticing as a group activity and exercising with friends and peers makes the effort much more fun.</br>
                        It’s our mission to let you lead your life normally while having the confidence that you can still do and accomplish everything you want to with an experienced senior companion every step of the way.`,
            },
            section3: {
                heading: "",
                desc: ``,
                img: "",
                cards: [
                    {
                        title: "Home",
                        img: Img1.src,
                        desc: `Staying active and engaged can be challenging, especially when living alone. Our companion services provide the support you need to keep your home tidy, enjoy good meals, and participate in activities, all while fostering meaningful interaction. As Mark Twain said, "To get the full value of joy, you must have someone to divide it with."</br>Companionship care brings many benefits, including reduced anxiety and depression, continued independence, and a stronger sense of community, helping you greet each day with renewed energy and purpose.`
                    },
                    {
                        title: "Staying Active",
                        img: Img1.src,
                        desc: "Our services include travel companions for seniors if you need to go shopping or someone to drive you to your daily appointments. Have some light gardening or hobbies and crafts you love to do? Your companion caregiver will be with you to chat and engage in daily activities.</br>                                One of the most cited activities to prevent depression and anxiety in seniors is physical exercise. Your companion will be with you to walk the dog or just take a leisurely stroll. Have a yoga or tai chi class you look forward to attending? Your companion can accompany you and observe or join the class right along with you."
                    },
                    {
                        title: "Hobbies and Interests",
                        img: Img1.src,
                        desc: "One-On-One knows that communication and socialization with friends and family is also important in keeping your spirits up. Time spent in solitude can increase the risk of depression and anxiety but getting involved with the community, organizing events and reading books with your companion can create a positive and lasting sense of well-being.</br>                   Our senior companion program is tailor-made to suit your lifestyle and your current needs. Have a new activity you’d like to try? We will be sure to match you with someone experienced in this area. Have a special interest you want to keep pursuing? We’ll pair you with a companion who understands your likes and dislikes guaranteeing you have the most delightful experience possible."
                    },
                ]
            },
        }
    },
    // 6
    {
        // serviceName: "End of Life Care",
        serviceName: servicesList[5],
        data: {
            section1: {
                heading: "End of Life Care",
                desc: `You will face many difficult decisions as you near the end of life and those decisions will include what kind of care you'd like to receive and where you'd like to receive this care. You will also consider who will make decisions about your care should you not be able to make decisions yourself.`,
                img: Img1.src
            },
            section2: {
                heading: "Devoted & Experienced End of Life Care",
                desc: `You deserve comfort, quality of life, and respect for your personal treatment decisions and cultural or spiritual concerns at every stage. One-On-One promises to provide you the necessary family support at home or in a care facility through our end-of-life care program.</br>
                    It’s our mission to ensure this passage of your life is as burden-free as possible. That is why our comprehensive health services team will communicate closely with you and your family to ensure your continuity of care is seamless and stress-free. We want you to maintain as much dignity as possible throughout the entire process and will provide you with around-the-clock emotional and physical support with each day.`,
            },
            section3: {
                heading: "",
                desc: `Your caregiver and One-On-One’s comprehensive health care program team will discuss your wishes and preferences with you and take these into account as they work closely with you to plan your care program. We will also take your family and loved ones’ wishes into careful consideration so that everyone is on the same page going forward.</br>
                        One-On-One will put your needs first. We want to know where you would like to receive your care and where you want to spend your remaining days. You can receive end-of-life care at home or receive hospice services in a care facility, depending on your needs and desires.</br>
                        We recognize that the best end-of-life care is based on the understanding that this phase of life is natural and inevitable but can also put a tremendous emotional toll on you and your loved ones. One-On-One’s main goals are to maintain your ultimate comfort, carefully explain the choices available to you and support your individuality to the best of our abilities.</br>
                        We respect the psychosocial and spiritual needs of you and your family and aim to reduce any inappropriate and stressful decisions regarding the setting of your care, providing you with the option of home care whenever possible. One-On-One’s comprehensive health care team will look after your preparation for the end-of-life, your relationships with your family members and healthcare providers, supporting you in achieving a sense of completion to the best of our ability.`,
                img: sectionImg2.src,
            },
            section4: {
                heading: "End of Life Care Where & When You Need It",
                desc: `Our greatest goal is to support you and your family’s acceptance of your end-of-life care phase and to discuss any changing aspects of your care process openly and honestly. Most importantly, we guarantee you will never be alone. Your caregiver, One-On-One care team and other health care providers will remain in close communication and contact with you and your family at every stage to ensure this chapter is as comfortable and peaceful as possible.`,
            },
        }
    },
    // 7
    {
        // serviceName: "Homemaking",
        serviceName: servicesList[6],
        data: {
            section1: {
                heading: "Homemaking",
                desc: `Living room windows looking a bit cloudy?</br>
                        Kitchen floor in need of a sweep? We know that getting around to keep things tidy every day can be difficult and accomplishing your chores on your own may be challenging.`,
                img: Img1.src
            },
            section2: {
                heading: "",
                desc: `Thats why our homemaking services for the elderly are available to you every day of the week to make sure you have an orderly and dust-free home to live in free of any hassle.</br>
                        One-On-One senior personal care services provides daily cleaning and straightening up for your at-home tasks so you dont have to worry about a thing.`,
            },
            section3: {
                heading: "Home Making & House Cleaning Services for the Elderly",
                desc: `You can stay at home relaxing with a good book or cup of tea while your caregiver cleans those hard to reach corners.</br>
                       Do you have a special cleaning request? </br>
                       Our comprehensive home care program manager along with your caregiver will be more than happy to accommodate your specific wishes to ensure your home is in tip-top shape. We understand you may have a specific way of dusting your favorite table with a particular type of lemon oil, so well be sure to go to great lengths to get the task done precisely as you would do it.</br>
                       We also understand your home is very special to you and that makes it special to us too. Your caregiver will handle your furniture and keepsakes with extra love and attention making sure every object is placed in its rightful spot. Our around-the-clock home care services will let you relax comfortably knowing your home will be looked after from top to bottom every morning, noon and night.`,
                img: sectionImg2.src,
            },
            section4: {
                heading: "Comprehensive Homemaking Services",
                desc: `The care of your home and your personal comfort is extremely important to us. We want to be sure your life is as stress-free as possible. Keeping your home looking beautiful at all hours will help alleviate your anxiety and tension. We will always be sure to remove any clutter and help you to organize your belongings in an easy-to-find system so everything has a place and you always know right where to find things.</br>
                        Perhaps you have a holiday or book club gathering being hosted in your home: our homemaking services will be sure to do an extra thorough cleaning job prior to your guests’ arrival, including preparing special seating arrangements and donning the halls with seasonal décor.</br>
                        No task is unimportant for our comprehensive home care team. We will work with you every step of the way to ensure your home is always looked after, paying attention to every detail and making sure you can relax in the most enjoyable environment possible.  `,
            },
        }
    },
    // 8
    {
        // serviceName: "Meal preparation",
        serviceName: servicesList[7],
        data: {
            section1: {
                heading: "In-Home Cooking for the Elderly",
                desc: `One-On-One knows how important mealtime is throughout your morning, afternoon and evening. Our care team provides thoughtful in-home cooking services for seniors to ensure you have the most enjoyable culinary experience at every meal.`,
                img: Img1.src
            },
            section2: {
                heading: "Thoughtfully Prepared Meals for Seniors",
                desc: `You open your eyes first thing in the morning. It’s a gorgeous sunny day. The scent of a freshly brewed pot of coffee and warm croissants just out of the oven floats through the air. As you walk into the kitchen, there’s a twinkling mega-watt smile ready to greet you with a cup of your favorite java in hand. A beautiful bowl of colorful melon, pineapples and fresh blueberries is waiting for you at your table with a vase of daisies cheering up the room. Your day has begun.`,
            },
            section3: {
                heading: "Let Us Do the Cooking for You",
                desc: `We know that you may be an amazing chef yourself with a knack and love for meal preparation and cooking for family and friends. We understand you might not have a driver’s license, so it can be difficult to go to grocery stores on your own, and walking around a store with a shopping cart or a full basket might be tricky.</br>
                        As part of One-On-One’s meals for seniors services, your caregiver will handle all of your grocery shopping for you each week or accompany you on your daily errands if you prefer selecting your own ingredients from your favorite food shops. Have fun preparing a meal together with your One-On-One home caregiver whenever you feel inspired. Share your menu wish list with your Care Manager and we will help to make your culinary dreams come true!`,
                img: sectionImg2.src,
            },
            section4: {
                heading: "Friendly, Flexible and Personal Meals",
                desc: `Your caregiver will lovingly prepare meals for you at breakfast, lunch and dinner based on your culinary favorites and your most coveted snacks too. Tea-time with cookies after lunch? A relaxing nightcap of warm milk and honey just before bedtime? She will go the extra mile to prepare all of your comfort foods and more.</br>
                        Your nutrition and health is as important to us as your meal satisfaction. That’s why One-On-One provides healthy meals for seniors, giving you the option to enjoy foods that match your specific dietary needs, food preferences and nutritional requirements while still tasting delicious. Are you on a gluten free diet? Cutting back on sugar and salt? No problem! Your caregiver is well-educated with a deep knowledge about how to prepare yummy meals for the elderly that still meet your nutritional needs. She will create a special shopping list for all of your dining needs as well, taking your special dietary information into consideration.</br>
                        Rest easy knowing you can enjoy your breakfast, lunch and dinner every day in the comfort of your own home with a heaping spoonful of care and an extra dash of goodness `,
            },
        }
    },
    // 9
    {
        // serviceName: "Personal Care",
        serviceName: servicesList[8],
        data: {
            section1: {
                heading: "Personal Care",
                desc: `We understand how important it is to maintain your sense of independence. Some days, handling day-to-day tasks on your own, such as bathing and doing your own hair, can feel like quite a challenge. That’s why One-On-One is ready to alleviate any extra stress in your life with our senior personal care services.`,
                img: Img1.src
            },
            section2: {
                heading: "Personal Care Services That Go Above and Beyond",
                desc: `We know it’s much easier to tackle your responsibilities when helped by a caring friend, confidante and personal assistant. Your caregiver is ready to support you with any personal hygiene and task that needs attending to, always with a smile and respect for your way of doing things.</br>
                        One-On-One’s personal care services are specifically designed to preserve and maintain your dignity as you continue to perform your daily activities in your own home. Your caregiver will be at the ready when necessary to give you the extra support and care you require with all of your routine activities. From oral care and shaving to receiving daily medication reminders, One-On-One’s comprehensive health services program takes all of your special needs into consideration in order to provide you with the most personalized care possible. We want you to be able to continue to lead the same lifestyle you’ve always led with ease and peace of mind.</br>
                        We recognize having someone in your home to assist with private and personal matters can be a sensitive situation and we want to be sure you feel as comfortable and relaxed as possible. That’s why we go the extra mile to match you with a caregiver who has compassion for your particular living situation as well as a connection to you and your personal interests. Our comprehensive health care team strives to pair you with the perfect caregiver for you and your family so that your personal care experience is not only helpful but pleasant and enjoyable too.`,
            },
            section3: {
                heading: " Qualified Personal Care Assistant",
                desc: `One-On-One is committed to giving you the highest quality of personal care possible. Your caregiver has been fully screened, assessed and prepped, ready to happily assist you with your everyday tasks and more monumental ones too. If you have mobility challenges such as getting out of bed and into a wheelchair, your caregiver and our One-On-One care team will be ready with the proper equipment and a helping hand to assist you.</br>
                We know that last-minute situations may occur from time to time as well. Your caregiver will be prepared to step-in at a moment’s notice when you need some extra help during the day or evening. Rest assured knowing you will always have support around the clock with the activities happening in your life.`,
                img: sectionImg2.src,
            },
        }
    },
    // 10
    {
        // serviceName: "Caregiver Relief/Respite Care",
        serviceName: servicesList[9],
        data: {
            section1: {
                heading: "Caregiver Relief/Respite Care",
                desc: `Looking after a sick loved one is a full-time role for family caregivers. And it's okay to ask for help or take a welcome break now and again. In fact, it may be essential to your own health.</br>
                One-On-One’s respite programs give you and other family members space away from your caregiving duties to relax, recharge, and come back to the person you care for with more energy and renewed focus. Our respite services are designed to support your wellbeing and strengthen the bond with your loved one when you get back.</br>
                Whether you need a few hours or a few weeks away, we're here to provide the in home respite care your loved one needs. Talk to us about respite care services today.`,
                img: Img1.src
            },
            section2: {
                heading: "Are you a family caregiver who needs a break from caring for your loved one?",
                desc: `Did you know that family caregivers and unpaid carers are twice as likely to experience stress than professional caregivers?</br>
                        Juggling family caregiving with other responsibilities like a full-time job or caring for children and other family members can have an emotional and physical cost you’ll eventually have to pay.</br>
                        As a family caregiver, sometimes it’s important to take a step back and ensure your own needs are being met. If you’re struggling to find time for yourself while caring for a loved one with health problems, respite care can help.`,
            },
            section3: {
                heading: "Respite care providers you can trust",
                desc: `Our respite care services provide you and other families with a much-needed break right when you need it most. We go the extra mile to find the perfect caregiver match to ensure both you and the person you care for are supported. From basic personal care requirements to more specialized care solutions, our trained staff and respite care providers are fully vetted and qualified to support a range of in home care services for your loved one.</br>
                Types of respite care can vary. Your respite care provider can assist your loved one with many forms of care from household chores, medical support, companionship care, transportation needs, and more.</br>


                One-On-One respite care philosophy</br>
                We believe Happier Aging should include more than basic respite care. Our caregivers can bring your loved one or family member back into the community, allow them to meet up with friends, and provide assistance with their favourite hobbies, faith based services, and planned activities.`,
                img: sectionImg2.src,
            },
            section4: {
                heading: "Respite services that fit your schedule",
                desc: `A short break can help you make it through the long haul ahead of you. This is why our caregiver respite care services are tailored to each individual and family situation to ensure you get the necessary relief and support you need at exactly the right time.</br>
                Before deciding on the respite services you and your family might need, our care manager will sit down and speak with you to discuss care service options. Do you need a few hours off twice a week? 24 hours away from the house? Or perhaps a regular weekly night out with your partner or friends? One-On-One provides short-term hourly care and can offer overnight stays whenever your loved one needs it.</br>
                Once you’ve decided when your loved one will receive care, we can work with you to design a respite care program that supports their lifestyle. What do they need most at this moment? Companionship and meal preparation? Or maybe some light housekeeping and personal care? We’ll discuss every detail with you and create a plan that meets the needs of your loved one and gives you a welcome break.`,
            },
        }
    },
    // 11
    {
        // serviceName: "Senior Transportation Services",
        serviceName: servicesList[10],
        data: {
            section1: {
                heading: "Senior Transportation Services",
                desc: `Driving yourself to and from your daily activities is a large part of maintaining your sense of independence and normal lifestyle. We understand how important having your own transportation is for your overall sense of well-being and positive outlook.`,
                img: Img1.src
            },
            section2: {
                heading: "Senior Transportation Services",
                desc: `Ride services for seniors are not always readily available and we want to ensure your life is as stress-free as possible. We appreciate that traveling is often more enjoyable with a friend or family member which is why our senior transportation team and your caregiver are readily available to you at all hours of the day, all seasons and every holiday so you never have to go anywhere alone.</br>
                Senior transportation services is just one part of One-On-One’s comprehensive health services — making sure you never have to worry about how to travel to and from your day-to-day destinations and favorite locales. Rest easy knowing you will always have a ride and a caregiver to accompany you wherever you’d like to go.</br>
                It’s our goal to make sure you have comfort knowing you can go anywhere and do anything at any time, always with your caregiver providing you comforting conversation and friendly assistance. You can maintain your sense of freedom and have the peace of mind knowing you will always have company on your travels.`,
            },
            section3: {
                heading: "",
                desc: ``,
                img: "",
                cards: [
                    {
                        title: "Events",
                        img: Img1.src,
                        desc: `Have a weekly sports group or regular coffee meet-up with your friends? Feel like taking a leisurely drive to check out a new store or some beautiful scenery? One-On-One provides special rides for seniors, ensuring that a driver is ready to pick you up and drop you off at your desired location at your designated time.</br>
                        Your caregiver will assist you with scheduling your transportation reservation and can assist you while grocery shopping, running your personal errands or getting to and from your daily outings.`
                    },
                    {
                        title: "Appointments",
                        img: Img1.src,
                        desc: `Maybe you have a doctor’s visit and would like someone to accompany you to the office. Not only will your caregiver be there to drive with you to your scheduled session, she will also sit beside you and take notes during your appointment or assist you with asking the doctor questions if any issues should arise.</br>
                        We want to be sure you are able to freely get where you need to be and that you always have someone by your side for every occasion.`
                    },
                    {
                        title: "Destinations",
                        img: Img1.src,
                        desc: `Do you love to fly but would like a companion to navigate the cumbersome aspects of airport and travel with you? One-On-One will arrange for your caregiver to accompany you on your next vacation so you don’t have to worry about the physical challenges and organizational details.</br>
                        Our caregiver will minimize any travel stress and hassle by driving with you to the airport and accompanying you through the check-in process. Our caregivers can even make international trips if you have plans to visit family, attend a wedding, or visit Paris for the first time.`
                    },
                ]
            },
        }
    },
    // 12
    {
        // serviceName: "Around-the-Clock Care",
        serviceName: servicesList[11],
        data: {
            section1: {
                heading: "Around-the-Clock Care",
                desc: `Your safety and peace of mind is our top priority. We understand there may come a time when you require more consistent full-time support at home and care around-the-clock.`,
                img: Img1.src
            },
            section2: {
                heading: "24 Hour Alzheimer’s & Dementia Care",
                desc: `One-On-One will do everything we can to ensure you and your loved ones can maintain your normal life while still enjoying all of your favorite hobbies with the care and support you need.</br>
                Perhaps your loved one is starting to experience symptoms of Alzheimer’s & dementia and is prone to wandering and confusion. Our mission is to eliminate your worry by providing constant care and ensuring the security of your family member every hour of the day.`,
            },
            section3: {
                heading: "Continuous Daily Care Team",
                desc: `Do you need someone to help you with meal preparation and house cleaning day to day? Your around-the-clock care team and caregiver will take over any tasks that need handling and accompany you on your favorite daily outings such as walking your dog or going grocery shopping. No matter the situation or occasion, you will always have someone readily available to provide assistance and companionship to you all day, every day.</br>
                Often times a physical disability limits your ability to carry out your daily lifestyle as you used to. One-On-One will be sure you and your family can always count on your caregiver to be at your home 24/7 to provide moral support, company and friendly assistance.`,
                img: sectionImg2.src,
            },
            section4: {
                heading: "Your Around the Clock Home Care Team",
                desc: `Your loved ones also benefit from around-the-clock care services. If they’ve been staying with you at your home but have an upcoming vacation planned, One-On-One’s comprehensive health care program will schedule an immediate around-the-clock home care caregiver to maintain your continuity of care and ensure there are no gaps in your daily assistance while your family is away. No matter what situation occurs, you will have someone in your home to look after you and take care of your household tasks every day.</br>
                Perhaps you’re recovering from a major surgery and require a live-in caregiver to assist you with your personal care routine such as bathing and getting in and out of bed. Our around-the-clock care will provide you with physical and emotional support throughout your recovery process.</br>
                One-On-One’s around-the-clock care gives you on-going companionship and support every day and every evening. Whether it’s 3 in the afternoon, or 3 in the middle of the night, our comprehensive health services program will support you with compassionate and attentive assistance any time you need it. From providing medication in the evening, to assisting you with getting dressed in the morning, we will ensure you have around-the-clock home care for situations that may require close monitoring. Rest easy knowing you will always have someone by your side to attend to your needs if and when necessary.
                It’s very important to us that you continue to preserve your sense of independence while having reassurance you will always have access to support and in-home care, overnight and throughout each day.`,
            },
        }
    },

]
