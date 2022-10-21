
let countryOptions = [
  {
    text: 'Российская Федерация',
    value: 1,
    region: [
      {
        text: 'Республика Адыгея',
        value: 1,
        city: [
          {
            text: 'Майкоп',
            value: 1
          },
          {
            text: 'Городок',
            value: 2
          },
        ]
      },
      {
        text: 'Амурская область',
        value: 2,
        city: [
          {
            text: 'Архара',
            value: 1
          },
          {
            text: 'Белогорск',
            value: 2
          },
          {
            text: 'Благовещенск',
            value: 3
          },
          {
            text: 'Бомнак',
            value: 4
          },
        ]
      },
    ]
  }
]


let optionsDepthFreezing = [
  [
    {
      region: 1,
      city: 1,
      depth: [
        {
          ClayLoam: [
            {
              title: 0,
              value: 0.26
            },
            {
              title: 5,
              value: 0.23
            },
            {
              title: 10,
              value: 0.2
            },
            {
              title: 15,
              value: 0.17
            },
            {
              title: 20,
              value: 0.15
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 0.31
            },
            {
              title: 5,
              value: 0.28
            },
            {
              title: 10,
              value: 0.24
            },
            {
              title: 15,
              value: 0.21
            },
            {
              title: 20,
              value: 0.17
            },
          ],
          Sand: [
            {
              title: 0,
              value: 0.33
            },
            {
              title: 5,
              value: 0.29
            },
            {
              title: 10,
              value: 0.26
            },
            {
              title: 15,
              value: 0.22
            },
            {
              title: 20,
              value: 0.18
            },
          ],
          CoarseClasticSoils: [
            {
              title: 0,
              value: 0.37
            },
            {
              title: 5,
              value: 0.33
            },
            {
              title: 10,
              value: 0.29
            },
            {
              title: 15,
              value: 0.25
            },
            {
              title: 20,
              value: 0.21
            },
          ],
        }
      ],
      freezing: [
        {
          title: 'ClayLoam',
          value: 0.28
        },
        {
          title: 'SandyLoam',
          value: 0.34
        },
        {
          title: 'Sand',
          value: 0.36
        },
        {
          title: 'CoarseClasticSoils',
          value: 0.41
        },
      ]
    },
    {
      region: 1,
      city: 2,
      depth: [
        {
          ClayLoam: [
            {
              title: 0,
              value: 0.99
            },
            {
              title: 5,
              value: 0.26
            },
            {
              title: 10,
              value: 0.23
            },
            {
              title: 15,
              value: 0.2
            },
            {
              title: 20,
              value: 0.17
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 0.99
            },
            {
              title: 5,
              value: 1.16
            },
            {
              title: 10,
              value: 1.32
            },
            {
              title: 15,
              value: 0.83
            },
            {
              title: 20,
              value: 1.82
            },
          ],
          Sand: [
            {
              title: 0,
              value: 1.07
            },
            {
              title: 5,
              value: 1.24
            },
            {
              title: 10,
              value: 1.42
            },
            {
              title: 15,
              value: 0.89
            },
            {
              title: 20,
              value: 1.95
            },
          ],
          CoarseClasticSoils: [
            {
              title: 0,
              value: 1.2
            },
            {
              title: 5,
              value: 1.4
            },
            {
              title: 10,
              value: 1.6
            },
            {
              title: 15,
              value: '1'
            },
            {
              title: 20,
              value: 2.21
            },
          ],
        }
      ],
      freezing: [
        {
          title: 'ClayLoam',
          value: 0.28
        },
        {
          title: 'SandyLoam',
          value: 0.34
        },
        {
          title: 'Sand',
          value: 0.36
        },
        {
          title: 'CoarseClasticSoils',
          value: 0.41
        },
      ]
    },
  ],
  [
    {
      region: 1,
      city: 1,
      depth: [
        {
          ClayLoam: [
            {
              title: 0,
              value: 0.29
            },
            {
              title: 5,
              value: 0.26
            },
            {
              title: 10,
              value: 0.23
            },
            {
              title: 15,
              value: 0.2
            },
            {
              title: 20,
              value: 0.17
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 0.34
            },
            {
              title: 5,
              value: 0.31
            },
            {
              title: 10,
              value: 0.28
            },
            {
              title: 15,
              value: 0.24
            },
            {
              title: 20,
              value: 0.21
            },
          ],
          Sand: [
            {
              title: 0,
              value: 0.36
            },
            {
              title: 5,
              value: 0.33
            },
            {
              title: 10,
              value: 0.29
            },
            {
              title: 15,
              value: 0.26
            },
            {
              title: 20,
              value: 0.22
            },
          ],
          CoarseClasticSoils: [
            {
              title: 0,
              value: 0.41
            },
            {
              title: 5,
              value: 0.37
            },
            {
              title: 10,
              value: 0.33
            },
            {
              title: 15,
              value: 0.29
            },
            {
              title: 20,
              value: 0.25
            },
          ],
        }
      ],
      freezing: [
        {
          title: 'ClayLoam',
          value: 0.28
        },
        {
          title: 'SandyLoam',
          value: 0.34
        },
        {
          title: 'Sand',
          value: 0.36
        },
        {
          title: 'CoarseClasticSoils',
          value: 0.41
        },
      ]
    },
  ],
  [
    {
      region: 1,
      city: 1,
      depth: [
        {
          ClayLoam: [
            {
              title: 0,
              value: 0.29
            },
            {
              title: 5,
              value: 0.29
            },
            {
              title: 10,
              value: 0.26
            },
            {
              title: 15,
              value: 0.23
            },
            {
              title: 20,
              value: 0.2
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 0.34
            },
            {
              title: 5,
              value: 0.34
            },
            {
              title: 10,
              value: 0.31
            },
            {
              title: 15,
              value: 0.28
            },
            {
              title: 20,
              value: 0.24
            },
          ],
          Sand: [
            {
              title: 0,
              value: 0.36
            },
            {
              title: 5,
              value: 0.36
            },
            {
              title: 10,
              value: 0.33
            },
            {
              title: 15,
              value: 0.29
            },
            {
              title: 20,
              value: 0.26
            },
          ],
          CoarseClasticSoils: [
            {
              title: 0,
              value: 0.41
            },
            {
              title: 5,
              value: 0.41
            },
            {
              title: 10,
              value: 0.37
            },
            {
              title: 15,
              value: 0.33
            },
            {
              title: 20,
              value: 0.29
            },
          ],
        }
      ],
      freezing: [
        {
          title: 'ClayLoam',
          value: 0.28
        },
        {
          title: 'SandyLoam',
          value: 0.34
        },
        {
          title: 'Sand',
          value: 0.36
        },
        {
          title: 'CoarseClasticSoils',
          value: 0.41
        },
      ]
    },
  ],
  [
    {
      region: 1,
      city: 1,
      depth: [
        {
          ClayLoam: [
            {
              title: 0,
              value: 0.29
            },
            {
              title: 5,
              value: 0.29
            },
            {
              title: 10,
              value: 0.26
            },
            {
              title: 15,
              value: 0.23
            },
            {
              title: 20,
              value: 0.2
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 0.34
            },
            {
              title: 5,
              value: 0.34
            },
            {
              title: 10,
              value: 0.31
            },
            {
              title: 15,
              value: 0.28
            },
            {
              title: 20,
              value: 0.24
            },
          ],
          Sand: [
            {
              title: 0,
              value: 0.36
            },
            {
              title: 5,
              value: 0.36
            },
            {
              title: 10,
              value: 0.33
            },
            {
              title: 15,
              value: 0.29
            },
            {
              title: 20,
              value: 0.26
            },
          ],
          CoarseClasticSoils: [
            {
              title: 0,
              value: 0.41
            },
            {
              title: 5,
              value: 0.41
            },
            {
              title: 10,
              value: 0.37
            },
            {
              title: 15,
              value: 0.33
            },
            {
              title: 20,
              value: 0.29
            },
          ],
        }
      ],
      freezing: [
        {
          title: 'ClayLoam',
          value: 0.28
        },
        {
          title: 'SandyLoam',
          value: 0.34
        },
        {
          title: 'Sand',
          value: 0.36
        },
        {
          title: 'CoarseClasticSoils',
          value: 0.41
        },
      ]
    },
  ],
  [
    
  ],
]
  

let options = [
  {
    text: 'Здание, устраиваемое по грунту, без подвала, с полами',
    value: 0
  },
  {
    text: 'Здание, устраиваемое на лагах по грунту, без подвала, с полами',
    value: 1
  },
  {
    text: 'Здание с утепленным цокольным перекрытием, без подвала, с полами',
    value: 2
  },
  {
    text: 'Здание с подвалом или техническим подпольем',
    value: 3
  },
  {
    text: 'Неотапливаемое сооружение',
    value: 4
  }
]



export default {countryOptions, optionsDepthFreezing , options}