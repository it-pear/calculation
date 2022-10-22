
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
          }
        ]
      },
      {
        text: 'Ленинградская область',
        value: 2,
        city: [
          {
            text: 'Свирица',
            value: 1
          },
          {
            text: 'Тихвин',
            value: 2
          },
          {
            text: 'Санкт-Петербург',
            value: 3
          }
        ]
      },
      {
        text: 'Московская область',
        value: 3,
        city: [
          {
            text: 'Дмитров',
            value: 1
          },
          {
            text: 'Кашира',
            value: 2
          },
          {
            text: 'Москва',
            value: 3
          }
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
      region: 2,
      city: 1,
      depth: [
        {
          ClayLoam: [
            {
              title: 0,
              value: 1.19
            },
            {
              title: 5,
              value: 1.06
            },
            {
              title: 10,
              value: 0.93
            },
            {
              title: 15,
              value: 0.8
            },
            {
              title: 20,
              value: 0.66
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 1.45
            },
            {
              title: 5,
              value: 1.29
            },
            {
              title: 10,
              value: 1.13
            },
            {
              title: 15,
              value: 0.97
            },
            {
              title: 20,
              value: 0.81
            },
          ],
          Sand: [
            {
              title: 0,
              value: 1.56
            },
            {
              title: 5,
              value: 1.39
            },
            {
              title: 10,
              value: 1.22
            },
            {
              title: 15,
              value: 1.04
            },
            {
              title: 20,
              value: 0.87
            },
          ],
          CoarseClasticSoils: [
            {
              title: 0,
              value: 1.77
            },
            {
              title: 5,
              value: 1.57
            },
            {
              title: 10,
              value: 1.38
            },
            {
              title: 15,
              value: 1.18
            },
            {
              title: 20,
              value: 0.98
            },
          ],
        }
      ],
      freezing: [
        {
          title: 'ClayLoam',
          value: 1.32
        },
        {
          title: 'SandyLoam',
          value: 1.61
        },
        {
          title: 'Sand',
          value: 	1.73
        },
        {
          title: 'CoarseClasticSoils',
          value: 1.96
        },
      ]
    },
    {
      region: 2,
      city: 2,
      depth: [
        {
          ClayLoam: [
            {
              title: 0,
              value: 1.12
            },
            {
              title: 5,
              value: 1
            },
            {
              title: 10,
              value: 0.87
            },
            {
              title: 15,
              value: 0.75
            },
            {
              title: 20,
              value: 0.62
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 1.36
            },
            {
              title: 5,
              value: 1.21
            },
            {
              title: 10,
              value: 1.06
            },
            {
              title: 15,
              value: 0.91
            },
            {
              title: 20,
              value: 0.76
            },
          ],
          Sand: [
            {
              title: 0,
              value: 1.46
            },
            {
              title: 5,
              value: 1.3
            },
            {
              title: 10,
              value: 1.14
            },
            {
              title: 15,
              value: 0.98
            },
            {
              title: 20,
              value: 0.81
            },
          ],
          CoarseClasticSoils: [
            {
              title: 0,
              value: 1.65
            },
            {
              title: 5,
              value: 1.47
            },
            {
              title: 10,
              value: 1.29
            },
            {
              title: 15,
              value: 1.1
            },
            {
              title: 20,
              value: 0.92
            },
          ],
        }
      ],
      freezing: [
        {
          title: 'ClayLoam',
          value: 1.24
        },
        {
          title: 'SandyLoam',
          value: 1.51
        },
        {
          title: 'Sand',
          value: 1.62
        },
        {
          title: 'CoarseClasticSoils',
          value: 1.83
        },
      ]
    },
    {
      region: 2,
      city: 3,
      depth: [
        {
          ClayLoam: [
            {
              title: 0,
              value: 0.9
            },
            {
              title: 5,
              value: 0.8
            },
            {
              title: 10,
              value: 0.7
            },
            {
              title: 15,
              value: 0.6
            },
            {
              title: 20,
              value: 0.5
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 1.08
            },
            {
              title: 5,
              value: 0.96
            },
            {
              title: 10,
              value: 0.84
            },
            {
              title: 15,
              value: 0.72
            },
            {
              title: 20,
              value: 0.6
            },
          ],
          Sand: [
            {
              title: 0,
              value: 1.17
            },
            {
              title: 5,
              value: 1.04
            },
            {
              title: 10,
              value: 0.91
            },
            {
              title: 15,
              value: 0.78
            },
            {
              title: 20,
              value: 0.65
            },
          ],
          CoarseClasticSoils: [
            {
              title: 0,
              value: 1.32
            },
            {
              title: 5,
              value: 1.17
            },
            {
              title: 10,
              value: 1.03
            },
            {
              title: 15,
              value: 0.88
            },
            {
              title: 20,
              value: 0.73
            },
          ],
        }
      ],
      freezing: [
        {
          title: 'ClayLoam',
          value: 0.99
        },
        {
          title: 'SandyLoam',
          value: 1.2
        },
        {
          title: 'Sand',
          value: 1.29
        },
        {
          title: 'CoarseClasticSoils',
          value: 1.46
        },
      ]
    },
    {
      region: 3,
      city: 1,
      depth: [
        {
          ClayLoam: [
            {
              title: 0,
              value: 1.21
            },
            {
              title: 5,
              value: 1.08
            },
            {
              title: 10,
              value: 0.94
            },
            {
              title: 15,
              value: 0.81
            },
            {
              title: 20,
              value: 0.67
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 1.48
            },
            {
              title: 5,
              value: 1.32
            },
            {
              title: 10,
              value: 1.15
            },
            {
              title: 15,
              value: 0.99
            },
            {
              title: 20,
              value: 0.82
            },
          ],
          Sand: [
            {
              title: 0,
              value: 1.58
            },
            {
              title: 5,
              value: 1.4
            },
            {
              title: 10,
              value: 1.23
            },
            {
              title: 15,
              value: 1.05
            },
            {
              title: 20,
              value: 0.88
            },
          ],
          CoarseClasticSoils: [
            {
              title: 0,
              value: 1.79
            },
            {
              title: 5,
              value: 1.59
            },
            {
              title: 10,
              value: 1.39
            },
            {
              title: 15,
              value: 1.19
            },
            {
              title: 20,
              value: 0.99
            },
          ],
        }
      ],
      freezing: [
        {
          title: 'ClayLoam',
          value: 1.34
        },
        {
          title: 'SandyLoam',
          value: 1.64
        },
        {
          title: 'Sand',
          value: 1.75
        },
        {
          title: 'CoarseClasticSoils',
          value: 1.98
        },
      ]
    },
    {
      region: 3,
      city: 2,
      depth: [
        {
          ClayLoam: [
            {
              title: 0,
              value: 1.23
            },
            {
              title: 5,
              value: 1.09
            },
            {
              title: 10,
              value: 0.96
            },
            {
              title: 15,
              value: 0.82
            },
            {
              title: 20,
              value: 0.68
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 1.49
            },
            {
              title: 5,
              value: 1.32
            },
            {
              title: 10,
              value: 1.16
            },
            {
              title: 15,
              value: 0.99
            },
            {
              title: 20,
              value: 0.83
            },
          ],
          Sand: [
            {
              title: 0,
              value: 1.6
            },
            {
              title: 5,
              value: 1.42
            },
            {
              title: 10,
              value: 1.24
            },
            {
              title: 15,
              value: 1.07
            },
            {
              title: 20,
              value: 0.89
            },
          ],
          CoarseClasticSoils: [
            {
              title: 0,
              value: 1.8
            },
            {
              title: 5,
              value: 1.6
            },
            {
              title: 10,
              value: 1.4
            },
            {
              title: 15,
              value: 1.2
            },
            {
              title: 20,
              value: 1         
            },
          ],
        }
      ],
      freezing: [
        {
          title: 'ClayLoam',
          value: 1.36
        },
        {
          title: 'SandyLoam',
          value: 1.65
        },
        {
          title: 'Sand',
          value: 1.77
        },
        {
          title: 'CoarseClasticSoils',
          value: 2        
        },
      ]
    },
    {
      region: 3,
      city: 3,
      depth: [
        {
          ClayLoam: [
            {
              title: 0,
              value: 1            
            },
            {
              title: 5,
              value: 0.89
            },
            {
              title: 10,
              value: 0.78
            },
            {
              title: 15,
              value: 0.67
            },
            {
              title: 20,
              value: 0.56
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 1.21
            },
            {
              title: 5,
              value: 1.08
            },
            {
              title: 10,
              value: 0.94
            },
            {
              title: 15,
              value: 0.81
            },
            {
              title: 20,
              value: 0.67
            },
          ],
          Sand: [
            {
              title: 0,
              value: 1.3
            },
            {
              title: 5,
              value: 1.16
            },
            {
              title: 10,
              value: 1.01
            },
            {
              title: 15,
              value: 0.87
            },
            {
              title: 20,
              value: 0.72
            },
          ],
          CoarseClasticSoils: [
            {
              title: 0,
              value: 1.47
            },
            {
              title: 5,
              value: 1.31
            },
            {
              title: 10,
              value: 1.15
            },
            {
              title: 15,
              value: 0.98
            },
            {
              title: 20,
              value: 0.82        
            },
          ],
        }
      ],
      freezing: [
        {
          title: 'ClayLoam',
          value: 1.11
        },
        {
          title: 'SandyLoam',
          value: 1.34
        },
        {
          title: 'Sand',
          value: 1.44
        },
        {
          title: 'CoarseClasticSoils',
          value: 1.63     
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
    {
      region: 2,
      city: 1,
      depth: [
        {
          ClayLoam: [
            {
              title: 0,
              value: 1.32
            },
            {
              title: 5,
              value: 1.19
            },
            {
              title: 10,
              value: 1.06
            },
            {
              title: 15,
              value: 0.93
            },
            {
              title: 20,
              value: 0.8
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 1.61
            },
            {
              title: 5,
              value: 1.45
            },
            {
              title: 10,
              value: 1.29
            },
            {
              title: 15,
              value: 1.13
            },
            {
              title: 20,
              value: 0.97
            },
          ],
          Sand: [
            {
              title: 0,
              value: 1.73
            },
            {
              title: 5,
              value: 1.56
            },
            {
              title: 10,
              value: 1.39
            },
            {
              title: 15,
              value: 1.22
            },
            {
              title: 20,
              value: 1.04
            },
          ],
          CoarseClasticSoils: [
            {
              title: 0,
              value: 1.96
            },
            {
              title: 5,
              value: 1.77
            },
            {
              title: 10,
              value: 1.57
            },
            {
              title: 15,
              value: 1.38
            },
            {
              title: 20,
              value: 1.18
            },
          ],
        }
      ],
      freezing: [
        {
          title: 'ClayLoam',
          value: 1.32
        },
        {
          title: 'SandyLoam',
          value: 1.61
        },
        {
          title: 'Sand',
          value: 	1.73
        },
        {
          title: 'CoarseClasticSoils',
          value: 1.96
        },
      ]
    },
    {
      region: 2,
      city: 2,
      depth: [
        {
          ClayLoam: [
            {
              title: 0,
              value: 1.24
            },
            {
              title: 5,
              value: 1.12
            },
            {
              title: 10,
              value: 1            
            },
            {
              title: 15,
              value: 0.87
            },
            {
              title: 20,
              value: 0.75
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 1.51
            },
            {
              title: 5,
              value: 1.36
            },
            {
              title: 10,
              value: 1.21
            },
            {
              title: 15,
              value: 1.06
            },
            {
              title: 20,
              value: 0.91
            },
          ],
          Sand: [
            {
              title: 0,
              value: 1.62
            },
            {
              title: 5,
              value: 1.46
            },
            {
              title: 10,
              value: 1.3
            },
            {
              title: 15,
              value: 1.14
            },
            {
              title: 20,
              value: 0.98
            },
          ],
          CoarseClasticSoils: [
            {
              title: 0,
              value: 1.83
            },
            {
              title: 5,
              value: 1.65
            },
            {
              title: 10,
              value: 1.47
            },
            {
              title: 15,
              value: 1.29
            },
            {
              title: 20,
              value: 1.1
            },
          ],
        }
      ],
      freezing: [
        {
          title: 'ClayLoam',
          value: 1.24
        },
        {
          title: 'SandyLoam',
          value: 1.51
        },
        {
          title: 'Sand',
          value: 1.62
        },
        {
          title: 'CoarseClasticSoils',
          value: 1.83
        },
      ]
    },
    {
      region: 2,
      city: 3,
      depth: [
        {
          ClayLoam: [
            {
              title: 0,
              value: 0.9
            },
            {
              title: 5,
              value: 0.8
            },
            {
              title: 10,
              value: 0.7
            },
            {
              title: 15,
              value: 0.6
            },
            {
              title: 20,
              value: 0.5
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 1.08
            },
            {
              title: 5,
              value: 0.96
            },
            {
              title: 10,
              value: 0.84
            },
            {
              title: 15,
              value: 0.72
            },
            {
              title: 20,
              value: 0.6
            },
          ],
          Sand: [
            {
              title: 0,
              value: 1.17
            },
            {
              title: 5,
              value: 1.04
            },
            {
              title: 10,
              value: 0.91
            },
            {
              title: 15,
              value: 0.78
            },
            {
              title: 20,
              value: 0.65
            },
          ],
          CoarseClasticSoils: [
            {
              title: 0,
              value: 1.32
            },
            {
              title: 5,
              value: 1.17
            },
            {
              title: 10,
              value: 1.03
            },
            {
              title: 15,
              value: 0.88
            },
            {
              title: 20,
              value: 0.73
            },
          ],
        }
      ],
      freezing: [
        {
          title: 'ClayLoam',
          value: 0.99
        },
        {
          title: 'SandyLoam',
          value: 1.2
        },
        {
          title: 'Sand',
          value: 1.29
        },
        {
          title: 'CoarseClasticSoils',
          value: 1.46
        },
      ]
    },
    {
      region: 3,
      city: 1,
      depth: [
        {
          ClayLoam: [
            {
              title: 0,
              value: 1.34
            },
            {
              title: 5,
              value: 1.21
            },
            {
              title: 10,
              value: 1.08
            },
            {
              title: 15,
              value: 0.94
            },
            {
              title: 20,
              value: 0.81
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 1.64
            },
            {
              title: 5,
              value: 1.48
            },
            {
              title: 10,
              value: 1.32
            },
            {
              title: 15,
              value: 1.15
            },
            {
              title: 20,
              value: 0.99
            },
          ],
          Sand: [
            {
              title: 0,
              value: 1.75
            },
            {
              title: 5,
              value: 1.58
            },
            {
              title: 10,
              value: 1.4
            },
            {
              title: 15,
              value: 1.23
            },
            {
              title: 20,
              value: 1.05
            },
          ],
          CoarseClasticSoils: [
            {
              title: 0,
              value: 1.98
            },
            {
              title: 5,
              value: 1.79
            },
            {
              title: 10,
              value: 1.59
            },
            {
              title: 15,
              value: 1.39
            },
            {
              title: 20,
              value: 1.19
            },
          ],
        }
      ],
      freezing: [
        {
          title: 'ClayLoam',
          value: 1.34
        },
        {
          title: 'SandyLoam',
          value: 1.64
        },
        {
          title: 'Sand',
          value: 1.75
        },
        {
          title: 'CoarseClasticSoils',
          value: 1.98
        },
      ]
    },
    {
      region: 3,
      city: 2,
      depth: [
        {
          ClayLoam: [
            {
              title: 0,
              value: 1.36
            },
            {
              title: 5,
              value: 1.23
            },
            {
              title: 10,
              value: 1.09
            },
            {
              title: 15,
              value: 0.96
            },
            {
              title: 20,
              value: 0.82
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 1.65
            },
            {
              title: 5,
              value: 1.49
            },
            {
              title: 10,
              value: 1.32
            },
            {
              title: 15,
              value: 1.16
            },
            {
              title: 20,
              value: 0.99
            },
          ],
          Sand: [
            {
              title: 0,
              value: 1.77
            },
            {
              title: 5,
              value: 1.6
            },
            {
              title: 10,
              value: 1.42
            },
            {
              title: 15,
              value: 1.24
            },
            {
              title: 20,
              value: 1.07
            },
          ],
          CoarseClasticSoils: [
            {
              title: 0,
              value: 2            
            },
            {
              title: 5,
              value: 1.8
            },
            {
              title: 10,
              value: 1.6
            },
            {
              title: 15,
              value: 1.4
            },
            {
              title: 20,
              value: 1.2       
            },
          ],
        }
      ],
      freezing: [
        {
          title: 'ClayLoam',
          value: 1.36
        },
        {
          title: 'SandyLoam',
          value: 1.65
        },
        {
          title: 'Sand',
          value: 1.77
        },
        {
          title: 'CoarseClasticSoils',
          value: 2        
        },
      ]
    },
    {
      region: 3,
      city: 3,
      depth: [
        {
          ClayLoam: [
            {
              title: 0,
              value: 1.12         
            },
            {
              title: 5,
              value: 1           
            },
            {
              title: 10,
              value: 0.89
            },
            {
              title: 15,
              value: 0.78
            },
            {
              title: 20,
              value: 0.67
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 1.34
            },
            {
              title: 5,
              value: 1.21
            },
            {
              title: 10,
              value: 1.08
            },
            {
              title: 15,
              value: 0.94
            },
            {
              title: 20,
              value: 0.81
            },
          ],
          Sand: [
            {
              title: 0,
              value: 1.44
            },
            {
              title: 5,
              value: 1.3
            },
            {
              title: 10,
              value: 1.16
            },
            {
              title: 15,
              value: 1.01
            },
            {
              title: 20,
              value: 0.87
            },
          ],
          CoarseClasticSoils: [
            {
              title: 0,
              value: 1.63
            },
            {
              title: 5,
              value: 1.47
            },
            {
              title: 10,
              value: 1.31
            },
            {
              title: 15,
              value: 1.15
            },
            {
              title: 20,
              value: 0.98       
            },
          ],
        }
      ],
      freezing: [
        {
          title: 'ClayLoam',
          value: 1.11
        },
        {
          title: 'SandyLoam',
          value: 1.34
        },
        {
          title: 'Sand',
          value: 1.44
        },
        {
          title: 'CoarseClasticSoils',
          value: 1.63     
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
    {
      region: 2,
      city: 1,
      depth: [
        {
          ClayLoam: [
            {
              title: 0,
              value: 1.32
            },
            {
              title: 5,
              value: 1.32
            },
            {
              title: 10,
              value: 1.19
            },
            {
              title: 15,
              value: 1.06
            },
            {
              title: 20,
              value: 0.93
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 1.61
            },
            {
              title: 5,
              value: 1.61
            },
            {
              title: 10,
              value: 1.45
            },
            {
              title: 15,
              value: 1.29
            },
            {
              title: 20,
              value: 1.13
            },
          ],
          Sand: [
            {
              title: 0,
              value: 1.73
            },
            {
              title: 5,
              value: 1.73
            },
            {
              title: 10,
              value: 1.56
            },
            {
              title: 15,
              value: 1.39
            },
            {
              title: 20,
              value: 1.22
            },
          ],
          CoarseClasticSoils: [
            {
              title: 0,
              value: 1.96
            },
            {
              title: 5,
              value: 1.96
            },
            {
              title: 10,
              value: 1.77
            },
            {
              title: 15,
              value: 1.57
            },
            {
              title: 20,
              value: 1.38
            },
          ],
        }
      ],
      freezing: [
        {
          title: 'ClayLoam',
          value: 1.32
        },
        {
          title: 'SandyLoam',
          value: 1.61
        },
        {
          title: 'Sand',
          value: 	1.73
        },
        {
          title: 'CoarseClasticSoils',
          value: 1.96
        },
      ]
    },
    {
      region: 2,
      city: 2,
      depth: [
        {
          ClayLoam: [
            {
              title: 0,
              value: 1.24
            },
            {
              title: 5,
              value: 1.12
            },
            {
              title: 10,
              value: 1         
            },
            {
              title: 15,
              value: 0.87
            },
            {
              title: 20,
              value: 0.75
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 1.51
            },
            {
              title: 5,
              value: 1.36
            },
            {
              title: 10,
              value: 1.21
            },
            {
              title: 15,
              value: 1.06
            },
            {
              title: 20,
              value: 0.91
            },
          ],
          Sand: [
            {
              title: 0,
              value: 1.62
            },
            {
              title: 5,
              value: 1.46
            },
            {
              title: 10,
              value: 1.3
            },
            {
              title: 15,
              value: 1.14
            },
            {
              title: 20,
              value: 0.98
            },
          ],
          CoarseClasticSoils: [
            {
              title: 0,
              value: 1.83
            },
            {
              title: 5,
              value: 1.65
            },
            {
              title: 10,
              value: 1.47
            },
            {
              title: 15,
              value: 1.29
            },
            {
              title: 20,
              value: 1.1
            },
          ],
        }
      ],
      freezing: [
        {
          title: 'ClayLoam',
          value: 1.24
        },
        {
          title: 'SandyLoam',
          value: 1.51
        },
        {
          title: 'Sand',
          value: 1.62
        },
        {
          title: 'CoarseClasticSoils',
          value: 1.83
        },
      ]
    },
    {
      region: 2,
      city: 3,
      depth: [
        {
          ClayLoam: [
            {
              title: 0,
              value: 0.99
            },
            {
              title: 5,
              value: 0.99
            },
            {
              title: 10,
              value: 0.9
            },
            {
              title: 15,
              value: 0.8
            },
            {
              title: 20,
              value: 0.7
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 1.2
            },
            {
              title: 5,
              value: 1.2
            },
            {
              title: 10,
              value: 1.08
            },
            {
              title: 15,
              value: 0.96
            },
            {
              title: 20,
              value: 0.84
            },
          ],
          Sand: [
            {
              title: 0,
              value: 1.29
            },
            {
              title: 5,
              value: 1.29
            },
            {
              title: 10,
              value: 1.17
            },
            {
              title: 15,
              value: 1.04
            },
            {
              title: 20,
              value: 0.91
            },
          ],
          CoarseClasticSoils: [
            {
              title: 0,
              value: 1.46
            },
            {
              title: 5,
              value: 1.46
            },
            {
              title: 10,
              value: 1.32
            },
            {
              title: 15,
              value: 1.17
            },
            {
              title: 20,
              value: 1.03
            },
          ],
        }
      ],
      freezing: [
        {
          title: 'ClayLoam',
          value: 0.99
        },
        {
          title: 'SandyLoam',
          value: 1.2
        },
        {
          title: 'Sand',
          value: 1.29
        },
        {
          title: 'CoarseClasticSoils',
          value: 1.46
        },
      ]
    },
    {
      region: 3,
      city: 1,
      depth: [
        {
          ClayLoam: [
            {
              title: 0,
              value: 1.34
            },
            {
              title: 5,
              value: 1.34
            },
            {
              title: 10,
              value: 1.21
            },
            {
              title: 15,
              value: 1.08
            },
            {
              title: 20,
              value: 0.94
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 1.64
            },
            {
              title: 5,
              value: 1.64
            },
            {
              title: 10,
              value: 1.48
            },
            {
              title: 15,
              value: 1.32
            },
            {
              title: 20,
              value: 1.15
            },
          ],
          Sand: [
            {
              title: 0,
              value: 1.75
            },
            {
              title: 5,
              value: 1.75
            },
            {
              title: 10,
              value: 1.58
            },
            {
              title: 15,
              value: 1.4
            },
            {
              title: 20,
              value: 1.23
            },
          ],
          CoarseClasticSoils: [
            {
              title: 0,
              value: 1.98
            },
            {
              title: 5,
              value: 1.98
            },
            {
              title: 10,
              value: 1.79
            },
            {
              title: 15,
              value: 1.59
            },
            {
              title: 20,
              value: 1.39
            },
          ],
        }
      ],
      freezing: [
        {
          title: 'ClayLoam',
          value: 1.34
        },
        {
          title: 'SandyLoam',
          value: 1.64
        },
        {
          title: 'Sand',
          value: 1.75
        },
        {
          title: 'CoarseClasticSoils',
          value: 1.98
        },
      ]
    },
    {
      region: 3,
      city: 2,
      depth: [
        {
          ClayLoam: [
            {
              title: 0,
              value: 1.36
            },
            {
              title: 5,
              value: 1.36
            },
            {
              title: 10,
              value: 1.23
            },
            {
              title: 15,
              value: 1.09
            },
            {
              title: 20,
              value: 0.96
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 1.65
            },
            {
              title: 5,
              value: 1.65
            },
            {
              title: 10,
              value: 1.49
            },
            {
              title: 15,
              value: 1.32
            },
            {
              title: 20,
              value: 1.16
            },
          ],
          Sand: [
            {
              title: 0,
              value: 1.77
            },
            {
              title: 5,
              value: 1.77
            },
            {
              title: 10,
              value: 1.6
            },
            {
              title: 15,
              value: 1.42
            },
            {
              title: 20,
              value: 1.24
            },
          ],
          CoarseClasticSoils: [
            {
              title: 0,
              value: 2         
            },
            {
              title: 5,
              value: 2           
            },
            {
              title: 10,
              value: 1.8
            },
            {
              title: 15,
              value: 1.6
            },
            {
              title: 20,
              value: 1.4       
            },
          ],
        }
      ],
      freezing: [
        {
          title: 'ClayLoam',
          value: 1.36
        },
        {
          title: 'SandyLoam',
          value: 1.65
        },
        {
          title: 'Sand',
          value: 1.77
        },
        {
          title: 'CoarseClasticSoils',
          value: 2        
        },
      ]
    },
    {
      region: 3,
      city: 3,
      depth: [
        {
          ClayLoam: [
            {
              title: 0,
              value: 1.12        
            },
            {
              title: 5,
              value: 1.12        
            },
            {
              title: 10,
              value: 1           
            },
            {
              title: 15,
              value: 0.89
            },
            {
              title: 20,
              value: 0.78
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 1.34
            },
            {
              title: 5,
              value: 1.34
            },
            {
              title: 10,
              value: 1.21
            },
            {
              title: 15,
              value: 1.08
            },
            {
              title: 20,
              value: 0.94
            },
          ],
          Sand: [
            {
              title: 0,
              value: 1.44
            },
            {
              title: 5,
              value: 1.44
            },
            {
              title: 10,
              value: 1.3
            },
            {
              title: 15,
              value: 1.16
            },
            {
              title: 20,
              value: 1.01
            },
          ],
          CoarseClasticSoils: [
            {
              title: 0,
              value: 1.63
            },
            {
              title: 5,
              value: 1.63
            },
            {
              title: 10,
              value: 1.47
            },
            {
              title: 15,
              value: 1.31
            },
            {
              title: 20,
              value: 1.15      
            },
          ],
        }
      ],
      freezing: [
        {
          title: 'ClayLoam',
          value: 1.11
        },
        {
          title: 'SandyLoam',
          value: 1.34
        },
        {
          title: 'Sand',
          value: 1.44
        },
        {
          title: 'CoarseClasticSoils',
          value: 1.63     
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
              value: 0.23
            },
            {
              title: 5,
              value: 0.2
            },
            {
              title: 10,
              value: 0.17
            },
            {
              title: 15,
              value: 0.15
            },
            {
              title: 20,
              value: 0.12
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 0.28
            },
            {
              title: 5,
              value: 0.24
            },
            {
              title: 10,
              value: 0.21
            },
            {
              title: 15,
              value: 0.17
            },
            {
              title: 20,
              value: 0.14
            },
          ],
          Sand: [
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
              value: 0.22
            },
            {
              title: 15,
              value: 0.18
            },
            {
              title: 20,
              value: 0.15
            },
          ],
          CoarseClasticSoils: [
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
              value: 0.25
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
      region: 2,
      city: 1,
      depth: [
        {
          ClayLoam: [
            {
              title: 0,
              value: 1.06
            },
            {
              title: 5,
              value: 0.93
            },
            {
              title: 10,
              value: 0.8
            },
            {
              title: 15,
              value: 0.66
            },
            {
              title: 20,
              value: 0.53
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 1.29
            },
            {
              title: 5,
              value: 1.13
            },
            {
              title: 10,
              value: 0.97
            },
            {
              title: 15,
              value: 0.81
            },
            {
              title: 20,
              value: 0.65
            },
          ],
          Sand: [
            {
              title: 0,
              value: 1.39
            },
            {
              title: 5,
              value: 1.22
            },
            {
              title: 10,
              value: 1.04
            },
            {
              title: 15,
              value: 0.87
            },
            {
              title: 20,
              value: 0.7
            },
          ],
          CoarseClasticSoils: [
            {
              title: 0,
              value: 1.57
            },
            {
              title: 5,
              value: 1.38
            },
            {
              title: 10,
              value: 1.18
            },
            {
              title: 15,
              value: 0.98
            },
            {
              title: 20,
              value: 0.79
            },
          ],
        }
      ],
      freezing: [
        {
          title: 'ClayLoam',
          value: 1.32
        },
        {
          title: 'SandyLoam',
          value: 1.61
        },
        {
          title: 'Sand',
          value: 	1.73
        },
        {
          title: 'CoarseClasticSoils',
          value: 1.96
        },
      ]
    },
    {
      region: 2,
      city: 2,
      depth: [
        {
          ClayLoam: [
            {
              title: 0,
              value: 1
            },
            {
              title: 5,
              value: 0.87
            },
            {
              title: 10,
              value: 0.75       
            },
            {
              title: 15,
              value: 0.62
            },
            {
              title: 20,
              value: 0.5
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 1.21
            },
            {
              title: 5,
              value: 1.06
            },
            {
              title: 10,
              value: 0.91
            },
            {
              title: 15,
              value: 0.76
            },
            {
              title: 20,
              value: 0.61
            },
          ],
          Sand: [
            {
              title: 0,
              value: 1.3
            },
            {
              title: 5,
              value: 1.14
            },
            {
              title: 10,
              value: 0.98
            },
            {
              title: 15,
              value: 0.81
            },
            {
              title: 20,
              value: 0.65
            },
          ],
          CoarseClasticSoils: [
            {
              title: 0,
              value: 1.47
            },
            {
              title: 5,
              value: 1.29
            },
            {
              title: 10,
              value: 1.1
            },
            {
              title: 15,
              value: 0.92
            },
            {
              title: 20,
              value: 0.74
            },
          ],
        }
      ],
      freezing: [
        {
          title: 'ClayLoam',
          value: 1.24
        },
        {
          title: 'SandyLoam',
          value: 1.51
        },
        {
          title: 'Sand',
          value: 1.62
        },
        {
          title: 'CoarseClasticSoils',
          value: 1.83
        },
      ]
    },
    {
      region: 2,
      city: 3,
      depth: [
        {
          ClayLoam: [
            {
              title: 0,
              value: 0.8
            },
            {
              title: 5,
              value: 0.7
            },
            {
              title: 10,
              value: 0.6
            },
            {
              title: 15,
              value: 0.5
            },
            {
              title: 20,
              value: 0.4
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 0.96
            },
            {
              title: 5,
              value: 0.84
            },
            {
              title: 10,
              value: 0.72
            },
            {
              title: 15,
              value: 0.6
            },
            {
              title: 20,
              value: 0.48
            },
          ],
          Sand: [
            {
              title: 0,
              value: 1.04
            },
            {
              title: 5,
              value: 0.91
            },
            {
              title: 10,
              value: 0.78
            },
            {
              title: 15,
              value: 0.65
            },
            {
              title: 20,
              value: 0.52
            },
          ],
          CoarseClasticSoils: [
            {
              title: 0,
              value: 1.17
            },
            {
              title: 5,
              value: 1.03
            },
            {
              title: 10,
              value: 0.88
            },
            {
              title: 15,
              value: 0.73
            },
            {
              title: 20,
              value: 0.59
            },
          ],
        }
      ],
      freezing: [
        {
          title: 'ClayLoam',
          value: 0.99
        },
        {
          title: 'SandyLoam',
          value: 1.2
        },
        {
          title: 'Sand',
          value: 1.29
        },
        {
          title: 'CoarseClasticSoils',
          value: 1.46
        },
      ]
    },
    {
      region: 3,
      city: 1,
      depth: [
        {
          ClayLoam: [
            {
              title: 0,
              value: 1.08
            },
            {
              title: 5,
              value: 0.94
            },
            {
              title: 10,
              value: 0.81
            },
            {
              title: 15,
              value: 0.67
            },
            {
              title: 20,
              value: 0.54
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 1.32
            },
            {
              title: 5,
              value: 1.15
            },
            {
              title: 10,
              value: 0.99
            },
            {
              title: 15,
              value: 0.82
            },
            {
              title: 20,
              value: 0.66
            },
          ],
          Sand: [
            {
              title: 0,
              value: 1.4
            },
            {
              title: 5,
              value: 1.23
            },
            {
              title: 10,
              value: 1.05
            },
            {
              title: 15,
              value: 0.88
            },
            {
              title: 20,
              value: 0.7
            },
          ],
          CoarseClasticSoils: [
            {
              title: 0,
              value: 1.59
            },
            {
              title: 5,
              value: 1.39
            },
            {
              title: 10,
              value: 1.19
            },
            {
              title: 15,
              value: 0.99
            },
            {
              title: 20,
              value: 0.8
            },
          ],
        }
      ],
      freezing: [
        {
          title: 'ClayLoam',
          value: 1.34
        },
        {
          title: 'SandyLoam',
          value: 1.64
        },
        {
          title: 'Sand',
          value: 1.75
        },
        {
          title: 'CoarseClasticSoils',
          value: 1.98
        },
      ]
    },
    {
      region: 3,
      city: 2,
      depth: [
        {
          ClayLoam: [
            {
              title: 0,
              value: 1.09
            },
            {
              title: 5,
              value: 0.96
            },
            {
              title: 10,
              value: 0.82
            },
            {
              title: 15,
              value: 0.68
            },
            {
              title: 20,
              value: 0.55
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 1.32
            },
            {
              title: 5,
              value: 1.16
            },
            {
              title: 10,
              value: 0.99
            },
            {
              title: 15,
              value: 0.83
            },
            {
              title: 20,
              value: 0.66
            },
          ],
          Sand: [
            {
              title: 0,
              value: 1.42
            },
            {
              title: 5,
              value: 1.24
            },
            {
              title: 10,
              value: 1.07
            },
            {
              title: 15,
              value: 0.89
            },
            {
              title: 20,
              value: 0.71
            },
          ],
          CoarseClasticSoils: [
            {
              title: 0,
              value: 1.6       
            },
            {
              title: 5,
              value: 1.4         
            },
            {
              title: 10,
              value: 1.2
            },
            {
              title: 15,
              value: 1            
            },
            {
              title: 20,
              value: 0.8      
            },
          ],
        }
      ],
      freezing: [
        {
          title: 'ClayLoam',
          value: 1.36
        },
        {
          title: 'SandyLoam',
          value: 1.65
        },
        {
          title: 'Sand',
          value: 1.77
        },
        {
          title: 'CoarseClasticSoils',
          value: 2        
        },
      ]
    },
    {
      region: 3,
      city: 3,
      depth: [
        {
          ClayLoam: [
            {
              title: 0,
              value: 0.89       
            },
            {
              title: 5,
              value: 0.78      
            },
            {
              title: 10,
              value: 0.67        
            },
            {
              title: 15,
              value: 0.56
            },
            {
              title: 20,
              value: 0.45
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 1.08
            },
            {
              title: 5,
              value: 0.94
            },
            {
              title: 10,
              value: 0.81
            },
            {
              title: 15,
              value: 0.67
            },
            {
              title: 20,
              value: 0.54
            },
          ],
          Sand: [
            {
              title: 0,
              value: 1.16
            },
            {
              title: 5,
              value: 1.01
            },
            {
              title: 10,
              value: 0.87
            },
            {
              title: 15,
              value: 0.72
            },
            {
              title: 20,
              value: 0.58
            },
          ],
          CoarseClasticSoils: [
            {
              title: 0,
              value: 1.31
            },
            {
              title: 5,
              value: 1.15
            },
            {
              title: 10,
              value: 0.98
            },
            {
              title: 15,
              value: 0.82
            },
            {
              title: 20,
              value: 0.66     
            },
          ],
        }
      ],
      freezing: [
        {
          title: 'ClayLoam',
          value: 1.11
        },
        {
          title: 'SandyLoam',
          value: 1.34
        },
        {
          title: 'Sand',
          value: 1.44
        },
        {
          title: 'CoarseClasticSoils',
          value: 1.63     
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
              value: 0.17
            },
            {
              title: 5,
              value: 0.2
            },
            {
              title: 10,
              value: 0.23
            },
            {
              title: 15,
              value: 0.15
            },
            {
              title: 20,
              value: 0.31
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 0.21
            },
            {
              title: 5,
              value: 0.24
            },
            {
              title: 10,
              value: 0.28
            },
            {
              title: 15,
              value: 0.17
            },
            {
              title: 20,
              value: 0.38
            },
          ],
          Sand: [
            {
              title: 0,
              value: 0.22
            },
            {
              title: 5,
              value: 0.26
            },
            {
              title: 10,
              value: 0.29
            },
            {
              title: 15,
              value: 0.18
            },
            {
              title: 20,
              value: 0.4
            },
          ],
          CoarseClasticSoils: [
            {
              title: 0,
              value: 0.25
            },
            {
              title: 5,
              value: 0.29
            },
            {
              title: 10,
              value: 0.33
            },
            {
              title: 15,
              value: 0.21
            },
            {
              title: 20,
              value: 0.46
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
      region: 2,
      city: 1,
      depth: [
        {
          ClayLoam: [
            {
              title: 0,
              value: 0.8
            },
            {
              title: 5,
              value: 0.93
            },
            {
              title: 10,
              value: 1.06
            },
            {
              title: 15,
              value: 0.66
            },
            {
              title: 20,
              value: 1.46
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 0.97
            },
            {
              title: 5,
              value: 1.13
            },
            {
              title: 10,
              value: 1.29
            },
            {
              title: 15,
              value: 0.81
            },
            {
              title: 20,
              value: 1.78
            },
          ],
          Sand: [
            {
              title: 0,
              value: 1.04
            },
            {
              title: 5,
              value: 1.22
            },
            {
              title: 10,
              value: 1.39
            },
            {
              title: 15,
              value: 0.87
            },
            {
              title: 20,
              value: 1.91
            },
          ],
          CoarseClasticSoils: [
            {
              title: 0,
              value: 1.18
            },
            {
              title: 5,
              value: 1.38
            },
            {
              title: 10,
              value: 1.57
            },
            {
              title: 15,
              value: 0.98
            },
            {
              title: 20,
              value: 2.16
            },
          ],
        }
      ],
      freezing: [
        {
          title: 'ClayLoam',
          value: 1.32
        },
        {
          title: 'SandyLoam',
          value: 1.61
        },
        {
          title: 'Sand',
          value: 	1.73
        },
        {
          title: 'CoarseClasticSoils',
          value: 1.96
        },
      ]
    },
    {
      region: 2,
      city: 2,
      depth: [
        {
          ClayLoam: [
            {
              title: 0,
              value: 0.75
            },
            {
              title: 5,
              value: 0.87
            },
            {
              title: 10,
              value: 1.      
            },
            {
              title: 15,
              value: 0.62
            },
            {
              title: 20,
              value: 1.37
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 0.91
            },
            {
              title: 5,
              value: 1.06
            },
            {
              title: 10,
              value: 1.21
            },
            {
              title: 15,
              value: 0.76
            },
            {
              title: 20,
              value: 1.67
            },
          ],
          Sand: [
            {
              title: 0,
              value: 0.98
            },
            {
              title: 5,
              value: 1.14
            },
            {
              title: 10,
              value: 1.3
            },
            {
              title: 15,
              value: 0.81
            },
            {
              title: 20,
              value: 1.79
            },
          ],
          CoarseClasticSoils: [
            {
              title: 0,
              value: 1.1
            },
            {
              title: 5,
              value: 1.29
            },
            {
              title: 10,
              value: 1.47
            },
            {
              title: 15,
              value: 0.92
            },
            {
              title: 20,
              value: 2.02
            },
          ],
        }
      ],
      freezing: [
        {
          title: 'ClayLoam',
          value: 1.24
        },
        {
          title: 'SandyLoam',
          value: 1.51
        },
        {
          title: 'Sand',
          value: 1.62
        },
        {
          title: 'CoarseClasticSoils',
          value: 1.83
        },
      ]
    },
    {
      region: 2,
      city: 3,
      depth: [
        {
          ClayLoam: [
            {
              title: 0,
              value: 0.8
            },
            {
              title: 5,
              value: 0.7
            },
            {
              title: 10,
              value: 0.6
            },
            {
              title: 15,
              value: 0.5
            },
            {
              title: 20,
              value: 0.4
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 0.96
            },
            {
              title: 5,
              value: 0.84
            },
            {
              title: 10,
              value: 0.72
            },
            {
              title: 15,
              value: 0.6
            },
            {
              title: 20,
              value: 0.48
            },
          ],
          Sand: [
            {
              title: 0,
              value: 1.04
            },
            {
              title: 5,
              value: 0.91
            },
            {
              title: 10,
              value: 0.78
            },
            {
              title: 15,
              value: 0.65
            },
            {
              title: 20,
              value: 0.52
            },
          ],
          CoarseClasticSoils: [
            {
              title: 0,
              value: 1.17
            },
            {
              title: 5,
              value: 1.03
            },
            {
              title: 10,
              value: 0.88
            },
            {
              title: 15,
              value: 0.73
            },
            {
              title: 20,
              value: 0.59
            },
          ],
        }
      ],
      freezing: [
        {
          title: 'ClayLoam',
          value: 0.99
        },
        {
          title: 'SandyLoam',
          value: 1.2
        },
        {
          title: 'Sand',
          value: 1.29
        },
        {
          title: 'CoarseClasticSoils',
          value: 1.46
        },
      ]
    },
    {
      region: 3,
      city: 1,
      depth: [
        {
          ClayLoam: [
            {
              title: 0,
              value: 0.81
            },
            {
              title: 5,
              value: 0.94
            },
            {
              title: 10,
              value: 1.08
            },
            {
              title: 15,
              value: 0.67
            },
            {
              title: 20,
              value: 1.48
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 0.99
            },
            {
              title: 5,
              value: 1.15
            },
            {
              title: 10,
              value: 1.32
            },
            {
              title: 15,
              value: 0.82
            },
            {
              title: 20,
              value: 1.81
            },
          ],
          Sand: [
            {
              title: 0,
              value: 1.05
            },
            {
              title: 5,
              value: 1.23
            },
            {
              title: 10,
              value: 1.4
            },
            {
              title: 15,
              value: 0.88
            },
            {
              title: 20,
              value: 1.93
            },
          ],
          CoarseClasticSoils: [
            {
              title: 0,
              value: 1.19
            },
            {
              title: 5,
              value: 1.39
            },
            {
              title: 10,
              value: 1.59
            },
            {
              title: 15,
              value: 0.99
            },
            {
              title: 20,
              value: 2.18
            },
          ],
        }
      ],
      freezing: [
        {
          title: 'ClayLoam',
          value: 1.34
        },
        {
          title: 'SandyLoam',
          value: 1.64
        },
        {
          title: 'Sand',
          value: 1.75
        },
        {
          title: 'CoarseClasticSoils',
          value: 1.98
        },
      ]
    },
    {
      region: 3,
      city: 2,
      depth: [
        {
          ClayLoam: [
            {
              title: 0,
              value: 0.82
            },
            {
              title: 5,
              value: 0.96
            },
            {
              title: 10,
              value: 1.09
            },
            {
              title: 15,
              value: 0.68
            },
            {
              title: 20,
              value: 1.5
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
              value: 1           
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
          value: 1.36
        },
        {
          title: 'SandyLoam',
          value: 1.65
        },
        {
          title: 'Sand',
          value: 1.77
        },
        {
          title: 'CoarseClasticSoils',
          value: 2        
        },
      ]
    },
    {
      region: 3,
      city: 3,
      depth: [
        {
          ClayLoam: [
            {
              title: 0,
              value: 0.67     
            },
            {
              title: 5,
              value: 0.78    
            },
            {
              title: 10,
              value: 0.89       
            },
            {
              title: 15,
              value: 0.56
            },
            {
              title: 20,
              value: 1.23
            },
          ],
          SandyLoam: [
            {
              title: 0,
              value: 	0.81
            },
            {
              title: 5,
              value: 0.94
            },
            {
              title: 10,
              value: 1.08
            },
            {
              title: 15,
              value: 0.67
            },
            {
              title: 20,
              value: 1.48
            },
          ],
          Sand: [
            {
              title: 0,
              value: 0.87
            },
            {
              title: 5,
              value: 1.01
            },
            {
              title: 10,
              value: 1.16
            },
            {
              title: 15,
              value: 0.72
            },
            {
              title: 20,
              value: 1.59
            },
          ],
          CoarseClasticSoils: [
            {
              title: 0,
              value: 0.98
            },
            {
              title: 5,
              value: 1.15
            },
            {
              title: 10,
              value: 1.31
            },
            {
              title: 15,
              value: 0.82
            },
            {
              title: 20,
              value: 1.8    
            },
          ],
        }
      ],
      freezing: [
        {
          title: 'ClayLoam',
          value: 1.11
        },
        {
          title: 'SandyLoam',
          value: 1.34
        },
        {
          title: 'Sand',
          value: 1.44
        },
        {
          title: 'CoarseClasticSoils',
          value: 1.63     
        },
      ]
    },
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