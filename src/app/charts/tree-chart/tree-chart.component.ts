import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
 
 
@Component({
  selector: 'tree-chart',
  templateUrl: './tree-chart.component.html',
  styleUrls: ['./tree-chart.component.css'] 
})
export class TreeChartComponent implements OnInit {

  svg;
  root;
  duration = 750;
  treemap;
  i;
  zoomListener;

  treeData = {
  	"name": "Root_Level",
  	"value": 75,
  	"type": "black",
  	"level": "red",
  	"male": 51,
  	"female": 24,

  	"children": [{
  			"name": "Operation",
  			"value": 40,
  			"type": "black",
  			"level": "green",
  			"male": 23,
  			"female": 17,

  			"children": [{
  					"name": "Top Management",
  					"value": 3,
  					"type": "grey",
  					"level": "red",
  					"male": 3,
  					"female": 0,

  					"children": [{
  							"name": "Operation Manager",
  							"value": 1,
  							"type": "steelblue",
  							"level": "orange",
  							"male": 1,
  							"female": 0,

  						},
  						{
  							"name": "Account Strategist",
  							"value": 1,
  							"type": "steelblue",
  							"level": "red",
  							"male": 1,
  							"female": 0,

  						},

  					]
  				},
  				{
  					"name": "Junior Level",
  					"value": 23,
  					"type": "grey",
  					"level": "green",
  					"male": 10,
  					"female": 13,

  					"children": [{
  							"name": "Analyst",
  							"value": 10,
  							"type": "steelblue",
  							"level": "orange",
  							"male": 7,
  							"female": 3,

  							"children": [{
  									"name": "Top Management",
  									"value": 2,
  									"type": "black",
  									"level": "red",
  									"male": 2,
  									"female": 0,

  									"children": [{
  											"name": "Director",
  											"value": 1,
  											"type": "black",
  											"level": "red",
  											"male": 1,
  											"female": 0,
  											"children": [{
  													"name": "Operation",
  													"value": 40,
  													"type": "black",
  													"level": "green",
  													"male": 23,
  													"female": 17,

  													"children": [{
  															"name": "Top Management",
  															"value": 3,
  															"type": "grey",
  															"level": "red",
  															"male": 3,
  															"female": 0,

  															"children": [{
  																	"name": "Operation Manager",
  																	"value": 1,
  																	"type": "steelblue",
  																	"level": "orange",
  																	"male": 1,
  																	"female": 0,

  																},
  																{
  																	"name": "Account Strategist",
  																	"value": 1,
  																	"type": "steelblue",
  																	"level": "red",
  																	"male": 1,
  																	"female": 0,

  																},

  															]
  														},
  														{
  															"name": "Junior Level",
  															"value": 23,
  															"type": "grey",
  															"level": "green",
  															"male": 10,
  															"female": 13,

  															"children": [{
  																	"name": "Analyst",
  																	"value": 10,
  																	"type": "steelblue",
  																	"level": "orange",
  																	"male": 7,
  																	"female": 3,

  																	"children": [{
  																			"name": "Top Management",
  																			"value": 2,
  																			"type": "black",
  																			"level": "red",
  																			"male": 2,
  																			"female": 0,

  																			"children": [{
  																					"name": "Director",
  																					"value": 1,
  																					"type": "black",
  																					"level": "red",
  																					"male": 1,
  																					"female": 0,

  																				},
  																				{
  																					"name": "HR Manager",
  																					"value": 1,
  																					"type": "black",
  																					"level": "red",
  																					"male": 1,
  																					"female": 0,

  																				}
  																			]
  																		},
  																		{
  																			"name": "Middle Management",
  																			"value": 1,
  																			"type": "black",
  																			"level": "red",
  																			"male": 0,
  																			"female": 1,
  																			"children": [{
  																				"name": "Front Office Executive",
  																				"value": 1,
  																				"type": "black",
  																				"level": "red",
  																				"male": 0,
  																				"female": 1,
  																				"children": [{
  																						"name": "Operation",
  																						"value": 40,
  																						"type": "black",
  																						"level": "green",
  																						"male": 23,
  																						"female": 17,

  																						"children": [{
  																								"name": "Top Management",
  																								"value": 3,
  																								"type": "grey",
  																								"level": "red",
  																								"male": 3,
  																								"female": 0,

  																								"children": [{
  																										"name": "Operation Manager",
  																										"value": 1,
  																										"type": "steelblue",
  																										"level": "orange",
  																										"male": 1,
  																										"female": 0,

  																									},
  																									{
  																										"name": "Account Strategist",
  																										"value": 1,
  																										"type": "steelblue",
  																										"level": "red",
  																										"male": 1,
  																										"female": 0,

  																									},

  																								]
  																							},
  																							{
  																								"name": "Junior Level",
  																								"value": 23,
  																								"type": "grey",
  																								"level": "green",
  																								"male": 10,
  																								"female": 13,

  																								"children": [{
  																										"name": "Analyst",
  																										"value": 10,
  																										"type": "steelblue",
  																										"level": "orange",
  																										"male": 7,
  																										"female": 3,

  																										"children": [{
  																												"name": "Top Management",
  																												"value": 2,
  																												"type": "black",
  																												"level": "red",
  																												"male": 2,
  																												"female": 0,

  																												"children": [{
  																														"name": "Director",
  																														"value": 1,
  																														"type": "black",
  																														"level": "red",
  																														"male": 1,
  																														"female": 0,

  																													},
  																													{
  																														"name": "HR Manager",
  																														"value": 1,
  																														"type": "black",
  																														"level": "red",
  																														"male": 1,
  																														"female": 0,

  																													}
  																												]
  																											},
  																											{
  																												"name": "Middle Management",
  																												"value": 1,
  																												"type": "black",
  																												"level": "red",
  																												"male": 0,
  																												"female": 1,
  																												"children": [{
  																													"name": "Front Office Executive",
  																													"value": 1,
  																													"type": "black",
  																													"level": "red",
  																													"male": 0,
  																													"female": 1,

  																												}]
  																											}
  																										]

  																									},
  																									{
  																										"name": "Intern",
  																										"value": 5,
  																										"type": "steelblue",
  																										"level": "red",
  																										"male": 0,
  																										"female": 5,

  																									},

  																								]
  																							},

  																						]
  																					},
  																					{
  																						"name": "Technology",
  																						"value": 32,
  																						"type": "black",
  																						"level": "red",
  																						"male": 26,
  																						"female": 6,
  																						"children": [{
  																								"name": "Top Management",
  																								"value": 6,
  																								"type": "grey",
  																								"level": "red",
  																								"male": 6,
  																								"female": 0,
  																								"children": [{
  																										"name": "Engineering Manager",
  																										"value": 1,
  																										"type": "grey",
  																										"level": "red",
  																										"male": 1,
  																										"female": 0,

  																									},
  																									{
  																										"name": "Product Manager",
  																										"value": 1,
  																										"type": "grey",
  																										"level": "red",
  																										"male": 1,
  																										"female": 0,

  																									},

  																								]
  																							},
  																							{
  																								"name": "Junior Level",
  																								"value": 21,
  																								"type": "grey",
  																								"level": "red",
  																								"male": 16,
  																								"female": 5,
  																								"children": [{
  																										"name": "System Administrator",
  																										"value": 1,
  																										"type": "grey",
  																										"level": "red",
  																										"male": 1,
  																										"female": 0,

  																									},
  																									{
  																										"name": "Support Engineer",
  																										"value": 1,
  																										"type": "grey",
  																										"level": "red",
  																										"male": 1,
  																										"female": 0,

  																									},

  																								]
  																							},

  																						]
  																					},

  																				]
  																			}]
  																		}
  																	]

  																},
  																{
  																	"name": "Intern",
  																	"value": 5,
  																	"type": "steelblue",
  																	"level": "red",
  																	"male": 0,
  																	"female": 5,

  																},

  															]
  														},

  													]
  												},
  												{
  													"name": "Technology",
  													"value": 32,
  													"type": "black",
  													"level": "red",
  													"male": 26,
  													"female": 6,
  													"children": [{
  															"name": "Top Management",
  															"value": 6,
  															"type": "grey",
  															"level": "red",
  															"male": 6,
  															"female": 0,
  															"children": [{
  																	"name": "Engineering Manager",
  																	"value": 1,
  																	"type": "grey",
  																	"level": "red",
  																	"male": 1,
  																	"female": 0,

  																},
  																{
  																	"name": "Product Manager",
  																	"value": 1,
  																	"type": "grey",
  																	"level": "red",
  																	"male": 1,
  																	"female": 0,

  																},

  															]
  														},
  														{
  															"name": "Junior Level",
  															"value": 21,
  															"type": "grey",
  															"level": "red",
  															"male": 16,
  															"female": 5,
  															"children": [{
  																	"name": "System Administrator",
  																	"value": 1,
  																	"type": "grey",
  																	"level": "red",
  																	"male": 1,
  																	"female": 0,
  																	"children": [{
  																			"name": "Operation",
  																			"value": 40,
  																			"type": "black",
  																			"level": "green",
  																			"male": 23,
  																			"female": 17,

  																			"children": [{
  																					"name": "Top Management",
  																					"value": 3,
  																					"type": "grey",
  																					"level": "red",
  																					"male": 3,
  																					"female": 0,

  																					"children": [{
  																							"name": "Operation Manager",
  																							"value": 1,
  																							"type": "steelblue",
  																							"level": "orange",
  																							"male": 1,
  																							"female": 0,

  																						},
  																						{
  																							"name": "Account Strategist",
  																							"value": 1,
  																							"type": "steelblue",
  																							"level": "red",
  																							"male": 1,
  																							"female": 0,

  																						},

  																					]
  																				},
  																				{
  																					"name": "Junior Level",
  																					"value": 23,
  																					"type": "grey",
  																					"level": "green",
  																					"male": 10,
  																					"female": 13,

  																					"children": [{
  																							"name": "Analyst",
  																							"value": 10,
  																							"type": "steelblue",
  																							"level": "orange",
  																							"male": 7,
  																							"female": 3,

  																							"children": [{
  																									"name": "Top Management",
  																									"value": 2,
  																									"type": "black",
  																									"level": "red",
  																									"male": 2,
  																									"female": 0,

  																									"children": [{
  																											"name": "Director",
  																											"value": 1,
  																											"type": "black",
  																											"level": "red",
  																											"male": 1,
  																											"female": 0,

  																										},
  																										{
  																											"name": "HR Manager",
  																											"value": 1,
  																											"type": "black",
  																											"level": "red",
  																											"male": 1,
  																											"female": 0,

  																										}
  																									]
  																								},
  																								{
  																									"name": "Middle Management",
  																									"value": 1,
  																									"type": "black",
  																									"level": "red",
  																									"male": 0,
  																									"female": 1,
  																									"children": [{
  																										"name": "Front Office Executive",
  																										"value": 1,
  																										"type": "black",
  																										"level": "red",
  																										"male": 0,
  																										"female": 1,

  																									}]
  																								}
  																							]

  																						},
  																						{
  																							"name": "Intern",
  																							"value": 5,
  																							"type": "steelblue",
  																							"level": "red",
  																							"male": 0,
  																							"female": 5,

  																						},

  																					]
  																				},

  																			]
  																		},
  																		{
  																			"name": "Technology",
  																			"value": 32,
  																			"type": "black",
  																			"level": "red",
  																			"male": 26,
  																			"female": 6,
  																			"children": [{
  																					"name": "Top Management",
  																					"value": 6,
  																					"type": "grey",
  																					"level": "red",
  																					"male": 6,
  																					"female": 0,
  																					"children": [{
  																							"name": "Engineering Manager",
  																							"value": 1,
  																							"type": "grey",
  																							"level": "red",
  																							"male": 1,
  																							"female": 0,

  																						},
  																						{
  																							"name": "Product Manager",
  																							"value": 1,
  																							"type": "grey",
  																							"level": "red",
  																							"male": 1,
  																							"female": 0,

  																						},

  																					]
  																				},
  																				{
  																					"name": "Junior Level",
  																					"value": 21,
  																					"type": "grey",
  																					"level": "red",
  																					"male": 16,
  																					"female": 5,
  																					"children": [{
  																							"name": "System Administrator",
  																							"value": 1,
  																							"type": "grey",
  																							"level": "red",
  																							"male": 1,
  																							"female": 0,

  																						},
  																						{
  																							"name": "Support Engineer",
  																							"value": 1,
  																							"type": "grey",
  																							"level": "red",
  																							"male": 1,
  																							"female": 0,
  																							"children": [{
  																									"name": "Operation",
  																									"value": 40,
  																									"type": "black",
  																									"level": "green",
  																									"male": 23,
  																									"female": 17,

  																									"children": [{
  																											"name": "Top Management",
  																											"value": 3,
  																											"type": "grey",
  																											"level": "red",
  																											"male": 3,
  																											"female": 0,

  																											"children": [{
  																													"name": "Operation Manager",
  																													"value": 1,
  																													"type": "steelblue",
  																													"level": "orange",
  																													"male": 1,
  																													"female": 0,

  																												},
  																												{
  																													"name": "Account Strategist",
  																													"value": 1,
  																													"type": "steelblue",
  																													"level": "red",
  																													"male": 1,
  																													"female": 0,

  																												},

  																											]
  																										},
  																										{
  																											"name": "Junior Level",
  																											"value": 23,
  																											"type": "grey",
  																											"level": "green",
  																											"male": 10,
  																											"female": 13,

  																											"children": [{
  																													"name": "Analyst",
  																													"value": 10,
  																													"type": "steelblue",
  																													"level": "orange",
  																													"male": 7,
  																													"female": 3,

  																													"children": [{
  																															"name": "Top Management",
  																															"value": 2,
  																															"type": "black",
  																															"level": "red",
  																															"male": 2,
  																															"female": 0,

  																															"children": [{
  																																	"name": "Director",
  																																	"value": 1,
  																																	"type": "black",
  																																	"level": "red",
  																																	"male": 1,
  																																	"female": 0,

  																																},
  																																{
  																																	"name": "HR Manager",
  																																	"value": 1,
  																																	"type": "black",
  																																	"level": "red",
  																																	"male": 1,
  																																	"female": 0,

  																																}
  																															]
  																														},
  																														{
  																															"name": "Middle Management",
  																															"value": 1,
  																															"type": "black",
  																															"level": "red",
  																															"male": 0,
  																															"female": 1,
  																															"children": [{
  																																"name": "Front Office Executive",
  																																"value": 1,
  																																"type": "black",
  																																"level": "red",
  																																"male": 0,
  																																"female": 1,

  																															}]
  																														}
  																													]

  																												},
  																												{
  																													"name": "Intern",
  																													"value": 5,
  																													"type": "steelblue",
  																													"level": "red",
  																													"male": 0,
  																													"female": 5,

  																												},

  																											]
  																										},

  																									]
  																								},
  																								{
  																									"name": "Technology",
  																									"value": 32,
  																									"type": "black",
  																									"level": "red",
  																									"male": 26,
  																									"female": 6,
  																									"children": [{
  																											"name": "Top Management",
  																											"value": 6,
  																											"type": "grey",
  																											"level": "red",
  																											"male": 6,
  																											"female": 0,
  																											"children": [{
  																													"name": "Engineering Manager",
  																													"value": 1,
  																													"type": "grey",
  																													"level": "red",
  																													"male": 1,
  																													"female": 0,

  																												},
  																												{
  																													"name": "Product Manager",
  																													"value": 1,
  																													"type": "grey",
  																													"level": "red",
  																													"male": 1,
  																													"female": 0,

  																												},

  																											]
  																										},
  																										{
  																											"name": "Junior Level",
  																											"value": 21,
  																											"type": "grey",
  																											"level": "red",
  																											"male": 16,
  																											"female": 5,
  																											"children": [{
  																													"name": "System Administrator",
  																													"value": 1,
  																													"type": "grey",
  																													"level": "red",
  																													"male": 1,
  																													"female": 0,

  																												},
  																												{
  																													"name": "Support Engineer",
  																													"value": 1,
  																													"type": "grey",
  																													"level": "red",
  																													"male": 1,
  																													"female": 0,

  																												},

  																											]
  																										},

  																									]
  																								},

  																							]
  																						},

  																					]
  																				},

  																			]
  																		},

  																	]

  																},
  																{
  																	"name": "Support Engineer",
  																	"value": 1,
  																	"type": "grey",
  																	"level": "red",
  																	"male": 1,
  																	"female": 0,
  																	"children": [{
  																			"name": "Operation",
  																			"value": 40,
  																			"type": "black",
  																			"level": "green",
  																			"male": 23,
  																			"female": 17,

  																			"children": [{
  																					"name": "Top Management",
  																					"value": 3,
  																					"type": "grey",
  																					"level": "red",
  																					"male": 3,
  																					"female": 0,

  																					"children": [{
  																							"name": "Operation Manager",
  																							"value": 1,
  																							"type": "steelblue",
  																							"level": "orange",
  																							"male": 1,
  																							"female": 0,

  																						},
  																						{
  																							"name": "Account Strategist",
  																							"value": 1,
  																							"type": "steelblue",
  																							"level": "red",
  																							"male": 1,
  																							"female": 0,

  																						},

  																					]
  																				},
  																				{
  																					"name": "Junior Level",
  																					"value": 23,
  																					"type": "grey",
  																					"level": "green",
  																					"male": 10,
  																					"female": 13,

  																					"children": [{
  																							"name": "Analyst",
  																							"value": 10,
  																							"type": "steelblue",
  																							"level": "orange",
  																							"male": 7,
  																							"female": 3,

  																							"children": [{
  																									"name": "Top Management",
  																									"value": 2,
  																									"type": "black",
  																									"level": "red",
  																									"male": 2,
  																									"female": 0,

  																									"children": [{
  																											"name": "Director",
  																											"value": 1,
  																											"type": "black",
  																											"level": "red",
  																											"male": 1,
  																											"female": 0,

  																										},
  																										{
  																											"name": "HR Manager",
  																											"value": 1,
  																											"type": "black",
  																											"level": "red",
  																											"male": 1,
  																											"female": 0,

  																										}
  																									]
  																								},
  																								{
  																									"name": "Middle Management",
  																									"value": 1,
  																									"type": "black",
  																									"level": "red",
  																									"male": 0,
  																									"female": 1,
  																									"children": [{
  																										"name": "Front Office Executive",
  																										"value": 1,
  																										"type": "black",
  																										"level": "red",
  																										"male": 0,
  																										"female": 1,
  																										"children": [{
  																												"name": "Operation",
  																												"value": 40,
  																												"type": "black",
  																												"level": "green",
  																												"male": 23,
  																												"female": 17,

  																												"children": [{
  																														"name": "Top Management",
  																														"value": 3,
  																														"type": "grey",
  																														"level": "red",
  																														"male": 3,
  																														"female": 0,

  																														"children": [{
  																																"name": "Operation Manager",
  																																"value": 1,
  																																"type": "steelblue",
  																																"level": "orange",
  																																"male": 1,
  																																"female": 0,

  																															},
  																															{
  																																"name": "Account Strategist",
  																																"value": 1,
  																																"type": "steelblue",
  																																"level": "red",
  																																"male": 1,
  																																"female": 0,

  																															},

  																														]
  																													},
  																													{
  																														"name": "Junior Level",
  																														"value": 23,
  																														"type": "grey",
  																														"level": "green",
  																														"male": 10,
  																														"female": 13,

  																														"children": [{
  																																"name": "Analyst",
  																																"value": 10,
  																																"type": "steelblue",
  																																"level": "orange",
  																																"male": 7,
  																																"female": 3,

  																																"children": [{
  																																		"name": "Top Management",
  																																		"value": 2,
  																																		"type": "black",
  																																		"level": "red",
  																																		"male": 2,
  																																		"female": 0,

  																																		"children": [{
  																																				"name": "Director",
  																																				"value": 1,
  																																				"type": "black",
  																																				"level": "red",
  																																				"male": 1,
  																																				"female": 0,

  																																			},
  																																			{
  																																				"name": "HR Manager",
  																																				"value": 1,
  																																				"type": "black",
  																																				"level": "red",
  																																				"male": 1,
  																																				"female": 0,

  																																			}
  																																		]
  																																	},
  																																	{
  																																		"name": "Middle Management",
  																																		"value": 1,
  																																		"type": "black",
  																																		"level": "red",
  																																		"male": 0,
  																																		"female": 1,
  																																		"children": [{
  																																			"name": "Front Office Executive",
  																																			"value": 1,
  																																			"type": "black",
  																																			"level": "red",
  																																			"male": 0,
  																																			"female": 1,

  																																		}]
  																																	}
  																																]

  																															},
  																															{
  																																"name": "Intern",
  																																"value": 5,
  																																"type": "steelblue",
  																																"level": "red",
  																																"male": 0,
  																																"female": 5,

  																															},

  																														]
  																													},

  																												]
  																											},
  																											{
  																												"name": "Technology",
  																												"value": 32,
  																												"type": "black",
  																												"level": "red",
  																												"male": 26,
  																												"female": 6,
  																												"children": [{
  																														"name": "Top Management",
  																														"value": 6,
  																														"type": "grey",
  																														"level": "red",
  																														"male": 6,
  																														"female": 0,
  																														"children": [{
  																																"name": "Engineering Manager",
  																																"value": 1,
  																																"type": "grey",
  																																"level": "red",
  																																"male": 1,
  																																"female": 0,

  																															},
  																															{
  																																"name": "Product Manager",
  																																"value": 1,
  																																"type": "grey",
  																																"level": "red",
  																																"male": 1,
  																																"female": 0,

  																															},

  																														]
  																													},
  																													{
  																														"name": "Junior Level",
  																														"value": 21,
  																														"type": "grey",
  																														"level": "red",
  																														"male": 16,
  																														"female": 5,
  																														"children": [{
  																																"name": "System Administrator",
  																																"value": 1,
  																																"type": "grey",
  																																"level": "red",
  																																"male": 1,
  																																"female": 0,

  																															},
  																															{
  																																"name": "Support Engineer",
  																																"value": 1,
  																																"type": "grey",
  																																"level": "red",
  																																"male": 1,
  																																"female": 0,

  																															},

  																														]
  																													},

  																												]
  																											},

  																										]
  																									}]
  																								}
  																							]

  																						},
  																						{
  																							"name": "Intern",
  																							"value": 5,
  																							"type": "steelblue",
  																							"level": "red",
  																							"male": 0,
  																							"female": 5,

  																						},

  																					]
  																				},

  																			]
  																		},
  																		{
  																			"name": "Technology",
  																			"value": 32,
  																			"type": "black",
  																			"level": "red",
  																			"male": 26,
  																			"female": 6,
  																			"children": [{
  																					"name": "Top Management",
  																					"value": 6,
  																					"type": "grey",
  																					"level": "red",
  																					"male": 6,
  																					"female": 0,
  																					"children": [{
  																							"name": "Engineering Manager",
  																							"value": 1,
  																							"type": "grey",
  																							"level": "red",
  																							"male": 1,
  																							"female": 0,

  																						},
  																						{
  																							"name": "Product Manager",
  																							"value": 1,
  																							"type": "grey",
  																							"level": "red",
  																							"male": 1,
  																							"female": 0,

  																						},

  																					]
  																				},
  																				{
  																					"name": "Junior Level",
  																					"value": 21,
  																					"type": "grey",
  																					"level": "red",
  																					"male": 16,
  																					"female": 5,
  																					"children": [{
  																							"name": "System Administrator",
  																							"value": 1,
  																							"type": "grey",
  																							"level": "red",
  																							"male": 1,
  																							"female": 0,
  																							"children": [{
  																									"name": "Operation",
  																									"value": 40,
  																									"type": "black",
  																									"level": "green",
  																									"male": 23,
  																									"female": 17,

  																									"children": [{
  																											"name": "Top Management",
  																											"value": 3,
  																											"type": "grey",
  																											"level": "red",
  																											"male": 3,
  																											"female": 0,

  																											"children": [{
  																													"name": "Operation Manager",
  																													"value": 1,
  																													"type": "steelblue",
  																													"level": "orange",
  																													"male": 1,
  																													"female": 0,

  																												},
  																												{
  																													"name": "Account Strategist",
  																													"value": 1,
  																													"type": "steelblue",
  																													"level": "red",
  																													"male": 1,
  																													"female": 0,

  																												},

  																											]
  																										},
  																										{
  																											"name": "Junior Level",
  																											"value": 23,
  																											"type": "grey",
  																											"level": "green",
  																											"male": 10,
  																											"female": 13,

  																											"children": [{
  																													"name": "Analyst",
  																													"value": 10,
  																													"type": "steelblue",
  																													"level": "orange",
  																													"male": 7,
  																													"female": 3,

  																													"children": [{
  																															"name": "Top Management",
  																															"value": 2,
  																															"type": "black",
  																															"level": "red",
  																															"male": 2,
  																															"female": 0,

  																															"children": [{
  																																	"name": "Director",
  																																	"value": 1,
  																																	"type": "black",
  																																	"level": "red",
  																																	"male": 1,
  																																	"female": 0,

  																																},
  																																{
  																																	"name": "HR Manager",
  																																	"value": 1,
  																																	"type": "black",
  																																	"level": "red",
  																																	"male": 1,
  																																	"female": 0,

  																																}
  																															]
  																														},
  																														{
  																															"name": "Middle Management",
  																															"value": 1,
  																															"type": "black",
  																															"level": "red",
  																															"male": 0,
  																															"female": 1,
  																															"children": [{
  																																"name": "Front Office Executive",
  																																"value": 1,
  																																"type": "black",
  																																"level": "red",
  																																"male": 0,
  																																"female": 1,

  																															}]
  																														}
  																													]

  																												},
  																												{
  																													"name": "Intern",
  																													"value": 5,
  																													"type": "steelblue",
  																													"level": "red",
  																													"male": 0,
  																													"female": 5,

  																												},

  																											]
  																										},

  																									]
  																								},
  																								{
  																									"name": "Technology",
  																									"value": 32,
  																									"type": "black",
  																									"level": "red",
  																									"male": 26,
  																									"female": 6,
  																									"children": [{
  																											"name": "Top Management",
  																											"value": 6,
  																											"type": "grey",
  																											"level": "red",
  																											"male": 6,
  																											"female": 0,
  																											"children": [{
  																													"name": "Engineering Manager",
  																													"value": 1,
  																													"type": "grey",
  																													"level": "red",
  																													"male": 1,
  																													"female": 0,

  																												},
  																												{
  																													"name": "Product Manager",
  																													"value": 1,
  																													"type": "grey",
  																													"level": "red",
  																													"male": 1,
  																													"female": 0,

  																												},

  																											]
  																										},
  																										{
  																											"name": "Junior Level",
  																											"value": 21,
  																											"type": "grey",
  																											"level": "red",
  																											"male": 16,
  																											"female": 5,
  																											"children": [{
  																													"name": "System Administrator",
  																													"value": 1,
  																													"type": "grey",
  																													"level": "red",
  																													"male": 1,
  																													"female": 0,

  																												},
  																												{
  																													"name": "Support Engineer",
  																													"value": 1,
  																													"type": "grey",
  																													"level": "red",
  																													"male": 1,
  																													"female": 0,
  																													"children": [{
  																															"name": "Operation",
  																															"value": 40,
  																															"type": "black",
  																															"level": "green",
  																															"male": 23,
  																															"female": 17,

  																															"children": [{
  																																	"name": "Top Management",
  																																	"value": 3,
  																																	"type": "grey",
  																																	"level": "red",
  																																	"male": 3,
  																																	"female": 0,

  																																	"children": [{
  																																			"name": "Operation Manager",
  																																			"value": 1,
  																																			"type": "steelblue",
  																																			"level": "orange",
  																																			"male": 1,
  																																			"female": 0,

  																																		},
  																																		{
  																																			"name": "Account Strategist",
  																																			"value": 1,
  																																			"type": "steelblue",
  																																			"level": "red",
  																																			"male": 1,
  																																			"female": 0,

  																																		},

  																																	]
  																																},
  																																{
  																																	"name": "Junior Level",
  																																	"value": 23,
  																																	"type": "grey",
  																																	"level": "green",
  																																	"male": 10,
  																																	"female": 13,

  																																	"children": [{
  																																			"name": "Analyst",
  																																			"value": 10,
  																																			"type": "steelblue",
  																																			"level": "orange",
  																																			"male": 7,
  																																			"female": 3,

  																																			"children": [{
  																																					"name": "Top Management",
  																																					"value": 2,
  																																					"type": "black",
  																																					"level": "red",
  																																					"male": 2,
  																																					"female": 0,

  																																					"children": [{
  																																							"name": "Director",
  																																							"value": 1,
  																																							"type": "black",
  																																							"level": "red",
  																																							"male": 1,
  																																							"female": 0,

  																																						},
  																																						{
  																																							"name": "HR Manager",
  																																							"value": 1,
  																																							"type": "black",
  																																							"level": "red",
  																																							"male": 1,
  																																							"female": 0,

  																																						}
  																																					]
  																																				},
  																																				{
  																																					"name": "Middle Management",
  																																					"value": 1,
  																																					"type": "black",
  																																					"level": "red",
  																																					"male": 0,
  																																					"female": 1,
  																																					"children": [{
  																																						"name": "Front Office Executive",
  																																						"value": 1,
  																																						"type": "black",
  																																						"level": "red",
  																																						"male": 0,
  																																						"female": 1,

  																																					}]
  																																				}
  																																			]

  																																		},
  																																		{
  																																			"name": "Intern",
  																																			"value": 5,
  																																			"type": "steelblue",
  																																			"level": "red",
  																																			"male": 0,
  																																			"female": 5,

  																																		},

  																																	]
  																																},

  																															]
  																														},
  																														{
  																															"name": "Technology",
  																															"value": 32,
  																															"type": "black",
  																															"level": "red",
  																															"male": 26,
  																															"female": 6,
  																															"children": [{
  																																	"name": "Top Management",
  																																	"value": 6,
  																																	"type": "grey",
  																																	"level": "red",
  																																	"male": 6,
  																																	"female": 0,
  																																	"children": [{
  																																			"name": "Engineering Manager",
  																																			"value": 1,
  																																			"type": "grey",
  																																			"level": "red",
  																																			"male": 1,
  																																			"female": 0,

  																																		},
  																																		{
  																																			"name": "Product Manager",
  																																			"value": 1,
  																																			"type": "grey",
  																																			"level": "red",
  																																			"male": 1,
  																																			"female": 0,

  																																		},

  																																	]
  																																},
  																																{
  																																	"name": "Junior Level",
  																																	"value": 21,
  																																	"type": "grey",
  																																	"level": "red",
  																																	"male": 16,
  																																	"female": 5,
  																																	"children": [{
  																																			"name": "System Administrator",
  																																			"value": 1,
  																																			"type": "grey",
  																																			"level": "red",
  																																			"male": 1,
  																																			"female": 0,

  																																		},
  																																		{
  																																			"name": "Support Engineer",
  																																			"value": 1,
  																																			"type": "grey",
  																																			"level": "red",
  																																			"male": 1,
  																																			"female": 0,

  																																		},

  																																	]
  																																},

  																															]
  																														},

  																													]
  																												},

  																											]
  																										},

  																									]
  																								},

  																							]

  																						},
  																						{
  																							"name": "Support Engineer",
  																							"value": 1,
  																							"type": "grey",
  																							"level": "red",
  																							"male": 1,
  																							"female": 0,
  																							"children": [{
  																									"name": "Operation",
  																									"value": 40,
  																									"type": "black",
  																									"level": "green",
  																									"male": 23,
  																									"female": 17,

  																									"children": [{
  																											"name": "Top Management",
  																											"value": 3,
  																											"type": "grey",
  																											"level": "red",
  																											"male": 3,
  																											"female": 0,

  																											"children": [{
  																													"name": "Operation Manager",
  																													"value": 1,
  																													"type": "steelblue",
  																													"level": "orange",
  																													"male": 1,
  																													"female": 0,

  																												},
  																												{
  																													"name": "Account Strategist",
  																													"value": 1,
  																													"type": "steelblue",
  																													"level": "red",
  																													"male": 1,
  																													"female": 0,

  																												},

  																											]
  																										},
  																										{
  																											"name": "Junior Level",
  																											"value": 23,
  																											"type": "grey",
  																											"level": "green",
  																											"male": 10,
  																											"female": 13,

  																											"children": [{
  																													"name": "Analyst",
  																													"value": 10,
  																													"type": "steelblue",
  																													"level": "orange",
  																													"male": 7,
  																													"female": 3,

  																													"children": [{
  																															"name": "Top Management",
  																															"value": 2,
  																															"type": "black",
  																															"level": "red",
  																															"male": 2,
  																															"female": 0,

  																															"children": [{
  																																	"name": "Director",
  																																	"value": 1,
  																																	"type": "black",
  																																	"level": "red",
  																																	"male": 1,
  																																	"female": 0,

  																																},
  																																{
  																																	"name": "HR Manager",
  																																	"value": 1,
  																																	"type": "black",
  																																	"level": "red",
  																																	"male": 1,
  																																	"female": 0,

  																																}
  																															]
  																														},
  																														{
  																															"name": "Middle Management",
  																															"value": 1,
  																															"type": "black",
  																															"level": "red",
  																															"male": 0,
  																															"female": 1,
  																															"children": [{
  																																"name": "Front Office Executive",
  																																"value": 1,
  																																"type": "black",
  																																"level": "red",
  																																"male": 0,
  																																"female": 1,
  																																"children": [{
  																																		"name": "Operation",
  																																		"value": 40,
  																																		"type": "black",
  																																		"level": "green",
  																																		"male": 23,
  																																		"female": 17,

  																																		"children": [{
  																																				"name": "Top Management",
  																																				"value": 3,
  																																				"type": "grey",
  																																				"level": "red",
  																																				"male": 3,
  																																				"female": 0,

  																																				"children": [{
  																																						"name": "Operation Manager",
  																																						"value": 1,
  																																						"type": "steelblue",
  																																						"level": "orange",
  																																						"male": 1,
  																																						"female": 0,

  																																					},
  																																					{
  																																						"name": "Account Strategist",
  																																						"value": 1,
  																																						"type": "steelblue",
  																																						"level": "red",
  																																						"male": 1,
  																																						"female": 0,

  																																					},

  																																				]
  																																			},
  																																			{
  																																				"name": "Junior Level",
  																																				"value": 23,
  																																				"type": "grey",
  																																				"level": "green",
  																																				"male": 10,
  																																				"female": 13,

  																																				"children": [{
  																																						"name": "Analyst",
  																																						"value": 10,
  																																						"type": "steelblue",
  																																						"level": "orange",
  																																						"male": 7,
  																																						"female": 3,

  																																						"children": [{
  																																								"name": "Top Management",
  																																								"value": 2,
  																																								"type": "black",
  																																								"level": "red",
  																																								"male": 2,
  																																								"female": 0,

  																																								"children": [{
  																																										"name": "Director",
  																																										"value": 1,
  																																										"type": "black",
  																																										"level": "red",
  																																										"male": 1,
  																																										"female": 0,

  																																									},
  																																									{
  																																										"name": "HR Manager",
  																																										"value": 1,
  																																										"type": "black",
  																																										"level": "red",
  																																										"male": 1,
  																																										"female": 0,

  																																									}
  																																								]
  																																							},
  																																							{
  																																								"name": "Middle Management",
  																																								"value": 1,
  																																								"type": "black",
  																																								"level": "red",
  																																								"male": 0,
  																																								"female": 1,
  																																								"children": [{
  																																									"name": "Front Office Executive",
  																																									"value": 1,
  																																									"type": "black",
  																																									"level": "red",
  																																									"male": 0,
  																																									"female": 1,

  																																								}]
  																																							}
  																																						]

  																																					},
  																																					{
  																																						"name": "Intern",
  																																						"value": 5,
  																																						"type": "steelblue",
  																																						"level": "red",
  																																						"male": 0,
  																																						"female": 5,

  																																					},

  																																				]
  																																			},

  																																		]
  																																	},
  																																	{
  																																		"name": "Technology",
  																																		"value": 32,
  																																		"type": "black",
  																																		"level": "red",
  																																		"male": 26,
  																																		"female": 6,
  																																		"children": [{
  																																				"name": "Top Management",
  																																				"value": 6,
  																																				"type": "grey",
  																																				"level": "red",
  																																				"male": 6,
  																																				"female": 0,
  																																				"children": [{
  																																						"name": "Engineering Manager",
  																																						"value": 1,
  																																						"type": "grey",
  																																						"level": "red",
  																																						"male": 1,
  																																						"female": 0,

  																																					},
  																																					{
  																																						"name": "Product Manager",
  																																						"value": 1,
  																																						"type": "grey",
  																																						"level": "red",
  																																						"male": 1,
  																																						"female": 0,

  																																					},

  																																				]
  																																			},
  																																			{
  																																				"name": "Junior Level",
  																																				"value": 21,
  																																				"type": "grey",
  																																				"level": "red",
  																																				"male": 16,
  																																				"female": 5,
  																																				"children": [{
  																																						"name": "System Administrator",
  																																						"value": 1,
  																																						"type": "grey",
  																																						"level": "red",
  																																						"male": 1,
  																																						"female": 0,

  																																					},
  																																					{
  																																						"name": "Support Engineer",
  																																						"value": 1,
  																																						"type": "grey",
  																																						"level": "red",
  																																						"male": 1,
  																																						"female": 0,

  																																					},

  																																				]
  																																			},

  																																		]
  																																	},

  																																]
  																															}]
  																														}
  																													]

  																												},
  																												{
  																													"name": "Intern",
  																													"value": 5,
  																													"type": "steelblue",
  																													"level": "red",
  																													"male": 0,
  																													"female": 5,

  																												},

  																											]
  																										},

  																									]
  																								},
  																								{
  																									"name": "Technology",
  																									"value": 32,
  																									"type": "black",
  																									"level": "red",
  																									"male": 26,
  																									"female": 6,
  																									"children": [{
  																											"name": "Top Management",
  																											"value": 6,
  																											"type": "grey",
  																											"level": "red",
  																											"male": 6,
  																											"female": 0,
  																											"children": [{
  																													"name": "Engineering Manager",
  																													"value": 1,
  																													"type": "grey",
  																													"level": "red",
  																													"male": 1,
  																													"female": 0,

  																												},
  																												{
  																													"name": "Product Manager",
  																													"value": 1,
  																													"type": "grey",
  																													"level": "red",
  																													"male": 1,
  																													"female": 0,

  																												},

  																											]
  																										},
  																										{
  																											"name": "Junior Level",
  																											"value": 21,
  																											"type": "grey",
  																											"level": "red",
  																											"male": 16,
  																											"female": 5,
  																											"children": [{
  																													"name": "System Administrator",
  																													"value": 1,
  																													"type": "grey",
  																													"level": "red",
  																													"male": 1,
  																													"female": 0,
  																													"children": [{
  																															"name": "Operation",
  																															"value": 40,
  																															"type": "black",
  																															"level": "green",
  																															"male": 23,
  																															"female": 17,

  																															"children": [{
  																																	"name": "Top Management",
  																																	"value": 3,
  																																	"type": "grey",
  																																	"level": "red",
  																																	"male": 3,
  																																	"female": 0,

  																																	"children": [{
  																																			"name": "Operation Manager",
  																																			"value": 1,
  																																			"type": "steelblue",
  																																			"level": "orange",
  																																			"male": 1,
  																																			"female": 0,

  																																		},
  																																		{
  																																			"name": "Account Strategist",
  																																			"value": 1,
  																																			"type": "steelblue",
  																																			"level": "red",
  																																			"male": 1,
  																																			"female": 0,

  																																		},

  																																	]
  																																},
  																																{
  																																	"name": "Junior Level",
  																																	"value": 23,
  																																	"type": "grey",
  																																	"level": "green",
  																																	"male": 10,
  																																	"female": 13,

  																																	"children": [{
  																																			"name": "Analyst",
  																																			"value": 10,
  																																			"type": "steelblue",
  																																			"level": "orange",
  																																			"male": 7,
  																																			"female": 3,

  																																			"children": [{
  																																					"name": "Top Management",
  																																					"value": 2,
  																																					"type": "black",
  																																					"level": "red",
  																																					"male": 2,
  																																					"female": 0,

  																																					"children": [{
  																																							"name": "Director",
  																																							"value": 1,
  																																							"type": "black",
  																																							"level": "red",
  																																							"male": 1,
  																																							"female": 0,

  																																						},
  																																						{
  																																							"name": "HR Manager",
  																																							"value": 1,
  																																							"type": "black",
  																																							"level": "red",
  																																							"male": 1,
  																																							"female": 0,

  																																						}
  																																					]
  																																				},
  																																				{
  																																					"name": "Middle Management",
  																																					"value": 1,
  																																					"type": "black",
  																																					"level": "red",
  																																					"male": 0,
  																																					"female": 1,
  																																					"children": [{
  																																						"name": "Front Office Executive",
  																																						"value": 1,
  																																						"type": "black",
  																																						"level": "red",
  																																						"male": 0,
  																																						"female": 1,

  																																					}]
  																																				}
  																																			]

  																																		},
  																																		{
  																																			"name": "Intern",
  																																			"value": 5,
  																																			"type": "steelblue",
  																																			"level": "red",
  																																			"male": 0,
  																																			"female": 5,

  																																		},

  																																	]
  																																},

  																															]
  																														},
  																														{
  																															"name": "Technology",
  																															"value": 32,
  																															"type": "black",
  																															"level": "red",
  																															"male": 26,
  																															"female": 6,
  																															"children": [{
  																																	"name": "Top Management",
  																																	"value": 6,
  																																	"type": "grey",
  																																	"level": "red",
  																																	"male": 6,
  																																	"female": 0,
  																																	"children": [{
  																																			"name": "Engineering Manager",
  																																			"value": 1,
  																																			"type": "grey",
  																																			"level": "red",
  																																			"male": 1,
  																																			"female": 0,

  																																		},
  																																		{
  																																			"name": "Product Manager",
  																																			"value": 1,
  																																			"type": "grey",
  																																			"level": "red",
  																																			"male": 1,
  																																			"female": 0,

  																																		},

  																																	]
  																																},
  																																{
  																																	"name": "Junior Level",
  																																	"value": 21,
  																																	"type": "grey",
  																																	"level": "red",
  																																	"male": 16,
  																																	"female": 5,
  																																	"children": [{
  																																			"name": "System Administrator",
  																																			"value": 1,
  																																			"type": "grey",
  																																			"level": "red",
  																																			"male": 1,
  																																			"female": 0,

  																																		},
  																																		{
  																																			"name": "Support Engineer",
  																																			"value": 1,
  																																			"type": "grey",
  																																			"level": "red",
  																																			"male": 1,
  																																			"female": 0,
  																																			"children": [{
  																																					"name": "Operation",
  																																					"value": 40,
  																																					"type": "black",
  																																					"level": "green",
  																																					"male": 23,
  																																					"female": 17,

  																																					"children": [{
  																																							"name": "Top Management",
  																																							"value": 3,
  																																							"type": "grey",
  																																							"level": "red",
  																																							"male": 3,
  																																							"female": 0,

  																																							"children": [{
  																																									"name": "Operation Manager",
  																																									"value": 1,
  																																									"type": "steelblue",
  																																									"level": "orange",
  																																									"male": 1,
  																																									"female": 0,

  																																								},
  																																								{
  																																									"name": "Account Strategist",
  																																									"value": 1,
  																																									"type": "steelblue",
  																																									"level": "red",
  																																									"male": 1,
  																																									"female": 0,

  																																								},

  																																							]
  																																						},
  																																						{
  																																							"name": "Junior Level",
  																																							"value": 23,
  																																							"type": "grey",
  																																							"level": "green",
  																																							"male": 10,
  																																							"female": 13,

  																																							"children": [{
  																																									"name": "Analyst",
  																																									"value": 10,
  																																									"type": "steelblue",
  																																									"level": "orange",
  																																									"male": 7,
  																																									"female": 3,

  																																									"children": [{
  																																											"name": "Top Management",
  																																											"value": 2,
  																																											"type": "black",
  																																											"level": "red",
  																																											"male": 2,
  																																											"female": 0,

  																																											"children": [{
  																																													"name": "Director",
  																																													"value": 1,
  																																													"type": "black",
  																																													"level": "red",
  																																													"male": 1,
  																																													"female": 0,

  																																												},
  																																												{
  																																													"name": "HR Manager",
  																																													"value": 1,
  																																													"type": "black",
  																																													"level": "red",
  																																													"male": 1,
  																																													"female": 0,

  																																												}
  																																											]
  																																										},
  																																										{
  																																											"name": "Middle Management",
  																																											"value": 1,
  																																											"type": "black",
  																																											"level": "red",
  																																											"male": 0,
  																																											"female": 1,
  																																											"children": [{
  																																												"name": "Front Office Executive",
  																																												"value": 1,
  																																												"type": "black",
  																																												"level": "red",
  																																												"male": 0,
  																																												"female": 1,

  																																											}]
  																																										}
  																																									]

  																																								},
  																																								{
  																																									"name": "Intern",
  																																									"value": 5,
  																																									"type": "steelblue",
  																																									"level": "red",
  																																									"male": 0,
  																																									"female": 5,

  																																								},

  																																							]
  																																						},

  																																					]
  																																				},
  																																				{
  																																					"name": "Technology",
  																																					"value": 32,
  																																					"type": "black",
  																																					"level": "red",
  																																					"male": 26,
  																																					"female": 6,
  																																					"children": [{
  																																							"name": "Top Management",
  																																							"value": 6,
  																																							"type": "grey",
  																																							"level": "red",
  																																							"male": 6,
  																																							"female": 0,
  																																							"children": [{
  																																									"name": "Engineering Manager",
  																																									"value": 1,
  																																									"type": "grey",
  																																									"level": "red",
  																																									"male": 1,
  																																									"female": 0,

  																																								},
  																																								{
  																																									"name": "Product Manager",
  																																									"value": 1,
  																																									"type": "grey",
  																																									"level": "red",
  																																									"male": 1,
  																																									"female": 0,

  																																								},

  																																							]
  																																						},
  																																						{
  																																							"name": "Junior Level",
  																																							"value": 21,
  																																							"type": "grey",
  																																							"level": "red",
  																																							"male": 16,
  																																							"female": 5,
  																																							"children": [{
  																																									"name": "System Administrator",
  																																									"value": 1,
  																																									"type": "grey",
  																																									"level": "red",
  																																									"male": 1,
  																																									"female": 0,

  																																								},
  																																								{
  																																									"name": "Support Engineer",
  																																									"value": 1,
  																																									"type": "grey",
  																																									"level": "red",
  																																									"male": 1,
  																																									"female": 0,

  																																								},

  																																							]
  																																						},

  																																					]
  																																				},

  																																			]
  																																		},

  																																	]
  																																},

  																															]
  																														},

  																													]

  																												},
  																												{
  																													"name": "Support Engineer",
  																													"value": 1,
  																													"type": "grey",
  																													"level": "red",
  																													"male": 1,
  																													"female": 0,
  																													"children": [{
  																															"name": "Operation",
  																															"value": 40,
  																															"type": "black",
  																															"level": "green",
  																															"male": 23,
  																															"female": 17,

  																															"children": [{
  																																	"name": "Top Management",
  																																	"value": 3,
  																																	"type": "grey",
  																																	"level": "red",
  																																	"male": 3,
  																																	"female": 0,

  																																	"children": [{
  																																			"name": "Operation Manager",
  																																			"value": 1,
  																																			"type": "steelblue",
  																																			"level": "orange",
  																																			"male": 1,
  																																			"female": 0,

  																																		},
  																																		{
  																																			"name": "Account Strategist",
  																																			"value": 1,
  																																			"type": "steelblue",
  																																			"level": "red",
  																																			"male": 1,
  																																			"female": 0,

  																																		},

  																																	]
  																																},
  																																{
  																																	"name": "Junior Level",
  																																	"value": 23,
  																																	"type": "grey",
  																																	"level": "green",
  																																	"male": 10,
  																																	"female": 13,

  																																	"children": [{
  																																			"name": "Analyst",
  																																			"value": 10,
  																																			"type": "steelblue",
  																																			"level": "orange",
  																																			"male": 7,
  																																			"female": 3,

  																																			"children": [{
  																																					"name": "Top Management",
  																																					"value": 2,
  																																					"type": "black",
  																																					"level": "red",
  																																					"male": 2,
  																																					"female": 0,

  																																					"children": [{
  																																							"name": "Director",
  																																							"value": 1,
  																																							"type": "black",
  																																							"level": "red",
  																																							"male": 1,
  																																							"female": 0,

  																																						},
  																																						{
  																																							"name": "HR Manager",
  																																							"value": 1,
  																																							"type": "black",
  																																							"level": "red",
  																																							"male": 1,
  																																							"female": 0,

  																																						}
  																																					]
  																																				},
  																																				{
  																																					"name": "Middle Management",
  																																					"value": 1,
  																																					"type": "black",
  																																					"level": "red",
  																																					"male": 0,
  																																					"female": 1,
  																																					"children": [{
  																																						"name": "Front Office Executive",
  																																						"value": 1,
  																																						"type": "black",
  																																						"level": "red",
  																																						"male": 0,
  																																						"female": 1,
  																																						"children": [{
  																																								"name": "Operation",
  																																								"value": 40,
  																																								"type": "black",
  																																								"level": "green",
  																																								"male": 23,
  																																								"female": 17,

  																																								"children": [{
  																																										"name": "Top Management",
  																																										"value": 3,
  																																										"type": "grey",
  																																										"level": "red",
  																																										"male": 3,
  																																										"female": 0,

  																																										"children": [{
  																																												"name": "Operation Manager",
  																																												"value": 1,
  																																												"type": "steelblue",
  																																												"level": "orange",
  																																												"male": 1,
  																																												"female": 0,

  																																											},
  																																											{
  																																												"name": "Account Strategist",
  																																												"value": 1,
  																																												"type": "steelblue",
  																																												"level": "red",
  																																												"male": 1,
  																																												"female": 0,

  																																											},

  																																										]
  																																									},
  																																									{
  																																										"name": "Junior Level",
  																																										"value": 23,
  																																										"type": "grey",
  																																										"level": "green",
  																																										"male": 10,
  																																										"female": 13,

  																																										"children": [{
  																																												"name": "Analyst",
  																																												"value": 10,
  																																												"type": "steelblue",
  																																												"level": "orange",
  																																												"male": 7,
  																																												"female": 3,

  																																												"children": [{
  																																														"name": "Top Management",
  																																														"value": 2,
  																																														"type": "black",
  																																														"level": "red",
  																																														"male": 2,
  																																														"female": 0,

  																																														"children": [{
  																																																"name": "Director",
  																																																"value": 1,
  																																																"type": "black",
  																																																"level": "red",
  																																																"male": 1,
  																																																"female": 0,

  																																															},
  																																															{
  																																																"name": "HR Manager",
  																																																"value": 1,
  																																																"type": "black",
  																																																"level": "red",
  																																																"male": 1,
  																																																"female": 0,

  																																															}
  																																														]
  																																													},
  																																													{
  																																														"name": "Middle Management",
  																																														"value": 1,
  																																														"type": "black",
  																																														"level": "red",
  																																														"male": 0,
  																																														"female": 1,
  																																														"children": [{
  																																															"name": "Front Office Executive",
  																																															"value": 1,
  																																															"type": "black",
  																																															"level": "red",
  																																															"male": 0,
  																																															"female": 1,

  																																														}]
  																																													}
  																																												]

  																																											},
  																																											{
  																																												"name": "Intern",
  																																												"value": 5,
  																																												"type": "steelblue",
  																																												"level": "red",
  																																												"male": 0,
  																																												"female": 5,

  																																											},

  																																										]
  																																									},

  																																								]
  																																							},
  																																							{
  																																								"name": "Technology",
  																																								"value": 32,
  																																								"type": "black",
  																																								"level": "red",
  																																								"male": 26,
  																																								"female": 6,
  																																								"children": [{
  																																										"name": "Top Management",
  																																										"value": 6,
  																																										"type": "grey",
  																																										"level": "red",
  																																										"male": 6,
  																																										"female": 0,
  																																										"children": [{
  																																												"name": "Engineering Manager",
  																																												"value": 1,
  																																												"type": "grey",
  																																												"level": "red",
  																																												"male": 1,
  																																												"female": 0,

  																																											},
  																																											{
  																																												"name": "Product Manager",
  																																												"value": 1,
  																																												"type": "grey",
  																																												"level": "red",
  																																												"male": 1,
  																																												"female": 0,

  																																											},

  																																										]
  																																									},
  																																									{
  																																										"name": "Junior Level",
  																																										"value": 21,
  																																										"type": "grey",
  																																										"level": "red",
  																																										"male": 16,
  																																										"female": 5,
  																																										"children": [{
  																																												"name": "System Administrator",
  																																												"value": 1,
  																																												"type": "grey",
  																																												"level": "red",
  																																												"male": 1,
  																																												"female": 0,

  																																											},
  																																											{
  																																												"name": "Support Engineer",
  																																												"value": 1,
  																																												"type": "grey",
  																																												"level": "red",
  																																												"male": 1,
  																																												"female": 0,

  																																											},

  																																										]
  																																									},

  																																								]
  																																							},

  																																						]
  																																					}]
  																																				}
  																																			]

  																																		},
  																																		{
  																																			"name": "Intern",
  																																			"value": 5,
  																																			"type": "steelblue",
  																																			"level": "red",
  																																			"male": 0,
  																																			"female": 5,

  																																		},

  																																	]
  																																},

  																															]
  																														},
  																														{
  																															"name": "Technology",
  																															"value": 32,
  																															"type": "black",
  																															"level": "red",
  																															"male": 26,
  																															"female": 6,
  																															"children": [{
  																																	"name": "Top Management",
  																																	"value": 6,
  																																	"type": "grey",
  																																	"level": "red",
  																																	"male": 6,
  																																	"female": 0,
  																																	"children": [{
  																																			"name": "Engineering Manager",
  																																			"value": 1,
  																																			"type": "grey",
  																																			"level": "red",
  																																			"male": 1,
  																																			"female": 0,

  																																		},
  																																		{
  																																			"name": "Product Manager",
  																																			"value": 1,
  																																			"type": "grey",
  																																			"level": "red",
  																																			"male": 1,
  																																			"female": 0,

  																																		},

  																																	]
  																																},
  																																{
  																																	"name": "Junior Level",
  																																	"value": 21,
  																																	"type": "grey",
  																																	"level": "red",
  																																	"male": 16,
  																																	"female": 5,
  																																	"children": [{
  																																			"name": "System Administrator",
  																																			"value": 1,
  																																			"type": "grey",
  																																			"level": "red",
  																																			"male": 1,
  																																			"female": 0,
  																																			"children": [{
  																																					"name": "Operation",
  																																					"value": 40,
  																																					"type": "black",
  																																					"level": "green",
  																																					"male": 23,
  																																					"female": 17,

  																																					"children": [{
  																																							"name": "Top Management",
  																																							"value": 3,
  																																							"type": "grey",
  																																							"level": "red",
  																																							"male": 3,
  																																							"female": 0,

  																																							"children": [{
  																																									"name": "Operation Manager",
  																																									"value": 1,
  																																									"type": "steelblue",
  																																									"level": "orange",
  																																									"male": 1,
  																																									"female": 0,

  																																								},
  																																								{
  																																									"name": "Account Strategist",
  																																									"value": 1,
  																																									"type": "steelblue",
  																																									"level": "red",
  																																									"male": 1,
  																																									"female": 0,

  																																								},

  																																							]
  																																						},
  																																						{
  																																							"name": "Junior Level",
  																																							"value": 23,
  																																							"type": "grey",
  																																							"level": "green",
  																																							"male": 10,
  																																							"female": 13,

  																																							"children": [{
  																																									"name": "Analyst",
  																																									"value": 10,
  																																									"type": "steelblue",
  																																									"level": "orange",
  																																									"male": 7,
  																																									"female": 3,

  																																									"children": [{
  																																											"name": "Top Management",
  																																											"value": 2,
  																																											"type": "black",
  																																											"level": "red",
  																																											"male": 2,
  																																											"female": 0,

  																																											"children": [{
  																																													"name": "Director",
  																																													"value": 1,
  																																													"type": "black",
  																																													"level": "red",
  																																													"male": 1,
  																																													"female": 0,

  																																												},
  																																												{
  																																													"name": "HR Manager",
  																																													"value": 1,
  																																													"type": "black",
  																																													"level": "red",
  																																													"male": 1,
  																																													"female": 0,

  																																												}
  																																											]
  																																										},
  																																										{
  																																											"name": "Middle Management",
  																																											"value": 1,
  																																											"type": "black",
  																																											"level": "red",
  																																											"male": 0,
  																																											"female": 1,
  																																											"children": [{
  																																												"name": "Front Office Executive",
  																																												"value": 1,
  																																												"type": "black",
  																																												"level": "red",
  																																												"male": 0,
  																																												"female": 1,

  																																											}]
  																																										}
  																																									]

  																																								},
  																																								{
  																																									"name": "Intern",
  																																									"value": 5,
  																																									"type": "steelblue",
  																																									"level": "red",
  																																									"male": 0,
  																																									"female": 5,

  																																								},

  																																							]
  																																						},

  																																					]
  																																				},
  																																				{
  																																					"name": "Technology",
  																																					"value": 32,
  																																					"type": "black",
  																																					"level": "red",
  																																					"male": 26,
  																																					"female": 6,
  																																					"children": [{
  																																							"name": "Top Management",
  																																							"value": 6,
  																																							"type": "grey",
  																																							"level": "red",
  																																							"male": 6,
  																																							"female": 0,
  																																							"children": [{
  																																									"name": "Engineering Manager",
  																																									"value": 1,
  																																									"type": "grey",
  																																									"level": "red",
  																																									"male": 1,
  																																									"female": 0,

  																																								},
  																																								{
  																																									"name": "Product Manager",
  																																									"value": 1,
  																																									"type": "grey",
  																																									"level": "red",
  																																									"male": 1,
  																																									"female": 0,

  																																								},

  																																							]
  																																						},
  																																						{
  																																							"name": "Junior Level",
  																																							"value": 21,
  																																							"type": "grey",
  																																							"level": "red",
  																																							"male": 16,
  																																							"female": 5,
  																																							"children": [{
  																																									"name": "System Administrator",
  																																									"value": 1,
  																																									"type": "grey",
  																																									"level": "red",
  																																									"male": 1,
  																																									"female": 0,

  																																								},
  																																								{
  																																									"name": "Support Engineer",
  																																									"value": 1,
  																																									"type": "grey",
  																																									"level": "red",
  																																									"male": 1,
  																																									"female": 0,
  																																									"children": [{
  																																											"name": "Operation",
  																																											"value": 40,
  																																											"type": "black",
  																																											"level": "green",
  																																											"male": 23,
  																																											"female": 17,

  																																											"children": [{
  																																													"name": "Top Management",
  																																													"value": 3,
  																																													"type": "grey",
  																																													"level": "red",
  																																													"male": 3,
  																																													"female": 0,

  																																													"children": [{
  																																															"name": "Operation Manager",
  																																															"value": 1,
  																																															"type": "steelblue",
  																																															"level": "orange",
  																																															"male": 1,
  																																															"female": 0,

  																																														},
  																																														{
  																																															"name": "Account Strategist",
  																																															"value": 1,
  																																															"type": "steelblue",
  																																															"level": "red",
  																																															"male": 1,
  																																															"female": 0,

  																																														},

  																																													]
  																																												},
  																																												{
  																																													"name": "Junior Level",
  																																													"value": 23,
  																																													"type": "grey",
  																																													"level": "green",
  																																													"male": 10,
  																																													"female": 13,

  																																													"children": [{
  																																															"name": "Analyst",
  																																															"value": 10,
  																																															"type": "steelblue",
  																																															"level": "orange",
  																																															"male": 7,
  																																															"female": 3,

  																																															"children": [{
  																																																	"name": "Top Management",
  																																																	"value": 2,
  																																																	"type": "black",
  																																																	"level": "red",
  																																																	"male": 2,
  																																																	"female": 0,

  																																																	"children": [{
  																																																			"name": "Director",
  																																																			"value": 1,
  																																																			"type": "black",
  																																																			"level": "red",
  																																																			"male": 1,
  																																																			"female": 0,

  																																																		},
  																																																		{
  																																																			"name": "HR Manager",
  																																																			"value": 1,
  																																																			"type": "black",
  																																																			"level": "red",
  																																																			"male": 1,
  																																																			"female": 0,

  																																																		}
  																																																	]
  																																																},
  																																																{
  																																																	"name": "Middle Management",
  																																																	"value": 1,
  																																																	"type": "black",
  																																																	"level": "red",
  																																																	"male": 0,
  																																																	"female": 1,
  																																																	"children": [{
  																																																		"name": "Front Office Executive",
  																																																		"value": 1,
  																																																		"type": "black",
  																																																		"level": "red",
  																																																		"male": 0,
  																																																		"female": 1,

  																																																	}]
  																																																}
  																																															]

  																																														},
  																																														{
  																																															"name": "Intern",
  																																															"value": 5,
  																																															"type": "steelblue",
  																																															"level": "red",
  																																															"male": 0,
  																																															"female": 5,

  																																														},

  																																													]
  																																												},

  																																											]
  																																										},
  																																										{
  																																											"name": "Technology",
  																																											"value": 32,
  																																											"type": "black",
  																																											"level": "red",
  																																											"male": 26,
  																																											"female": 6,
  																																											"children": [{
  																																													"name": "Top Management",
  																																													"value": 6,
  																																													"type": "grey",
  																																													"level": "red",
  																																													"male": 6,
  																																													"female": 0,
  																																													"children": [{
  																																															"name": "Engineering Manager",
  																																															"value": 1,
  																																															"type": "grey",
  																																															"level": "red",
  																																															"male": 1,
  																																															"female": 0,

  																																														},
  																																														{
  																																															"name": "Product Manager",
  																																															"value": 1,
  																																															"type": "grey",
  																																															"level": "red",
  																																															"male": 1,
  																																															"female": 0,

  																																														},

  																																													]
  																																												},
  																																												{
  																																													"name": "Junior Level",
  																																													"value": 21,
  																																													"type": "grey",
  																																													"level": "red",
  																																													"male": 16,
  																																													"female": 5,
  																																													"children": [{
  																																															"name": "System Administrator",
  																																															"value": 1,
  																																															"type": "grey",
  																																															"level": "red",
  																																															"male": 1,
  																																															"female": 0,

  																																														},
  																																														{
  																																															"name": "Support Engineer",
  																																															"value": 1,
  																																															"type": "grey",
  																																															"level": "red",
  																																															"male": 1,
  																																															"female": 0,

  																																														},

  																																													]
  																																												},

  																																											]
  																																										},

  																																									]
  																																								},

  																																							]
  																																						},

  																																					]
  																																				},

  																																			]

  																																		},
  																																		{
  																																			"name": "Support Engineer",
  																																			"value": 1,
  																																			"type": "grey",
  																																			"level": "red",
  																																			"male": 1,
  																																			"female": 0,
  																																			"children": [{
  																																					"name": "Operation",
  																																					"value": 40,
  																																					"type": "black",
  																																					"level": "green",
  																																					"male": 23,
  																																					"female": 17,

  																																					"children": [{
  																																							"name": "Top Management",
  																																							"value": 3,
  																																							"type": "grey",
  																																							"level": "red",
  																																							"male": 3,
  																																							"female": 0,

  																																							"children": [{
  																																									"name": "Operation Manager",
  																																									"value": 1,
  																																									"type": "steelblue",
  																																									"level": "orange",
  																																									"male": 1,
  																																									"female": 0,

  																																								},
  																																								{
  																																									"name": "Account Strategist",
  																																									"value": 1,
  																																									"type": "steelblue",
  																																									"level": "red",
  																																									"male": 1,
  																																									"female": 0,

  																																								},

  																																							]
  																																						},
  																																						{
  																																							"name": "Junior Level",
  																																							"value": 23,
  																																							"type": "grey",
  																																							"level": "green",
  																																							"male": 10,
  																																							"female": 13,

  																																							"children": [{
  																																									"name": "Analyst",
  																																									"value": 10,
  																																									"type": "steelblue",
  																																									"level": "orange",
  																																									"male": 7,
  																																									"female": 3,

  																																									"children": [{
  																																											"name": "Top Management",
  																																											"value": 2,
  																																											"type": "black",
  																																											"level": "red",
  																																											"male": 2,
  																																											"female": 0,

  																																											"children": [{
  																																													"name": "Director",
  																																													"value": 1,
  																																													"type": "black",
  																																													"level": "red",
  																																													"male": 1,
  																																													"female": 0,

  																																												},
  																																												{
  																																													"name": "HR Manager",
  																																													"value": 1,
  																																													"type": "black",
  																																													"level": "red",
  																																													"male": 1,
  																																													"female": 0,

  																																												}
  																																											]
  																																										},
  																																										{
  																																											"name": "Middle Management",
  																																											"value": 1,
  																																											"type": "black",
  																																											"level": "red",
  																																											"male": 0,
  																																											"female": 1,
  																																											"children": [{
  																																												"name": "Front Office Executive",
  																																												"value": 1,
  																																												"type": "black",
  																																												"level": "red",
  																																												"male": 0,
  																																												"female": 1,
  																																												"children": [{
  																																														"name": "Operation",
  																																														"value": 40,
  																																														"type": "black",
  																																														"level": "green",
  																																														"male": 23,
  																																														"female": 17,

  																																														"children": [{
  																																																"name": "Top Management",
  																																																"value": 3,
  																																																"type": "grey",
  																																																"level": "red",
  																																																"male": 3,
  																																																"female": 0,

  																																																"children": [{
  																																																		"name": "Operation Manager",
  																																																		"value": 1,
  																																																		"type": "steelblue",
  																																																		"level": "orange",
  																																																		"male": 1,
  																																																		"female": 0,

  																																																	},
  																																																	{
  																																																		"name": "Account Strategist",
  																																																		"value": 1,
  																																																		"type": "steelblue",
  																																																		"level": "red",
  																																																		"male": 1,
  																																																		"female": 0,

  																																																	},

  																																																]
  																																															},
  																																															{
  																																																"name": "Junior Level",
  																																																"value": 23,
  																																																"type": "grey",
  																																																"level": "green",
  																																																"male": 10,
  																																																"female": 13,

  																																																"children": [{
  																																																		"name": "Analyst",
  																																																		"value": 10,
  																																																		"type": "steelblue",
  																																																		"level": "orange",
  																																																		"male": 7,
  																																																		"female": 3,

  																																																		"children": [{
  																																																				"name": "Top Management",
  																																																				"value": 2,
  																																																				"type": "black",
  																																																				"level": "red",
  																																																				"male": 2,
  																																																				"female": 0,

  																																																				"children": [{
  																																																						"name": "Director",
  																																																						"value": 1,
  																																																						"type": "black",
  																																																						"level": "red",
  																																																						"male": 1,
  																																																						"female": 0,

  																																																					},
  																																																					{
  																																																						"name": "HR Manager",
  																																																						"value": 1,
  																																																						"type": "black",
  																																																						"level": "red",
  																																																						"male": 1,
  																																																						"female": 0,

  																																																					}
  																																																				]
  																																																			},
  																																																			{
  																																																				"name": "Middle Management",
  																																																				"value": 1,
  																																																				"type": "black",
  																																																				"level": "red",
  																																																				"male": 0,
  																																																				"female": 1,
  																																																				"children": [{
  																																																					"name": "Front Office Executive",
  																																																					"value": 1,
  																																																					"type": "black",
  																																																					"level": "red",
  																																																					"male": 0,
  																																																					"female": 1,

  																																																				}]
  																																																			}
  																																																		]

  																																																	},
  																																																	{
  																																																		"name": "Intern",
  																																																		"value": 5,
  																																																		"type": "steelblue",
  																																																		"level": "red",
  																																																		"male": 0,
  																																																		"female": 5,

  																																																	},

  																																																]
  																																															},

  																																														]
  																																													},
  																																													{
  																																														"name": "Technology",
  																																														"value": 32,
  																																														"type": "black",
  																																														"level": "red",
  																																														"male": 26,
  																																														"female": 6,
  																																														"children": [{
  																																																"name": "Top Management",
  																																																"value": 6,
  																																																"type": "grey",
  																																																"level": "red",
  																																																"male": 6,
  																																																"female": 0,
  																																																"children": [{
  																																																		"name": "Engineering Manager",
  																																																		"value": 1,
  																																																		"type": "grey",
  																																																		"level": "red",
  																																																		"male": 1,
  																																																		"female": 0,

  																																																	},
  																																																	{
  																																																		"name": "Product Manager",
  																																																		"value": 1,
  																																																		"type": "grey",
  																																																		"level": "red",
  																																																		"male": 1,
  																																																		"female": 0,

  																																																	},

  																																																]
  																																															},
  																																															{
  																																																"name": "Junior Level",
  																																																"value": 21,
  																																																"type": "grey",
  																																																"level": "red",
  																																																"male": 16,
  																																																"female": 5,
  																																																"children": [{
  																																																		"name": "System Administrator",
  																																																		"value": 1,
  																																																		"type": "grey",
  																																																		"level": "red",
  																																																		"male": 1,
  																																																		"female": 0,

  																																																	},
  																																																	{
  																																																		"name": "Support Engineer",
  																																																		"value": 1,
  																																																		"type": "grey",
  																																																		"level": "red",
  																																																		"male": 1,
  																																																		"female": 0,

  																																																	},

  																																																]
  																																															},

  																																														]
  																																													},

  																																												]
  																																											}]
  																																										}
  																																									]

  																																								},
  																																								{
  																																									"name": "Intern",
  																																									"value": 5,
  																																									"type": "steelblue",
  																																									"level": "red",
  																																									"male": 0,
  																																									"female": 5,

  																																								},

  																																							]
  																																						},

  																																					]
  																																				},
  																																				{
  																																					"name": "Technology",
  																																					"value": 32,
  																																					"type": "black",
  																																					"level": "red",
  																																					"male": 26,
  																																					"female": 6,
  																																					"children": [{
  																																							"name": "Top Management",
  																																							"value": 6,
  																																							"type": "grey",
  																																							"level": "red",
  																																							"male": 6,
  																																							"female": 0,
  																																							"children": [{
  																																									"name": "Engineering Manager",
  																																									"value": 1,
  																																									"type": "grey",
  																																									"level": "red",
  																																									"male": 1,
  																																									"female": 0,

  																																								},
  																																								{
  																																									"name": "Product Manager",
  																																									"value": 1,
  																																									"type": "grey",
  																																									"level": "red",
  																																									"male": 1,
  																																									"female": 0,

  																																								},

  																																							]
  																																						},
  																																						{
  																																							"name": "Junior Level",
  																																							"value": 21,
  																																							"type": "grey",
  																																							"level": "red",
  																																							"male": 16,
  																																							"female": 5,
  																																							"children": [{
  																																									"name": "System Administrator",
  																																									"value": 1,
  																																									"type": "grey",
  																																									"level": "red",
  																																									"male": 1,
  																																									"female": 0,
  																																									"children": [{
  																																											"name": "Operation",
  																																											"value": 40,
  																																											"type": "black",
  																																											"level": "green",
  																																											"male": 23,
  																																											"female": 17,

  																																											"children": [{
  																																													"name": "Top Management",
  																																													"value": 3,
  																																													"type": "grey",
  																																													"level": "red",
  																																													"male": 3,
  																																													"female": 0,

  																																													"children": [{
  																																															"name": "Operation Manager",
  																																															"value": 1,
  																																															"type": "steelblue",
  																																															"level": "orange",
  																																															"male": 1,
  																																															"female": 0,

  																																														},
  																																														{
  																																															"name": "Account Strategist",
  																																															"value": 1,
  																																															"type": "steelblue",
  																																															"level": "red",
  																																															"male": 1,
  																																															"female": 0,

  																																														},

  																																													]
  																																												},
  																																												{
  																																													"name": "Junior Level",
  																																													"value": 23,
  																																													"type": "grey",
  																																													"level": "green",
  																																													"male": 10,
  																																													"female": 13,

  																																													"children": [{
  																																															"name": "Analyst",
  																																															"value": 10,
  																																															"type": "steelblue",
  																																															"level": "orange",
  																																															"male": 7,
  																																															"female": 3,

  																																															"children": [{
  																																																	"name": "Top Management",
  																																																	"value": 2,
  																																																	"type": "black",
  																																																	"level": "red",
  																																																	"male": 2,
  																																																	"female": 0,

  																																																	"children": [{
  																																																			"name": "Director",
  																																																			"value": 1,
  																																																			"type": "black",
  																																																			"level": "red",
  																																																			"male": 1,
  																																																			"female": 0,

  																																																		},
  																																																		{
  																																																			"name": "HR Manager",
  																																																			"value": 1,
  																																																			"type": "black",
  																																																			"level": "red",
  																																																			"male": 1,
  																																																			"female": 0,

  																																																		}
  																																																	]
  																																																},
  																																																{
  																																																	"name": "Middle Management",
  																																																	"value": 1,
  																																																	"type": "black",
  																																																	"level": "red",
  																																																	"male": 0,
  																																																	"female": 1,
  																																																	"children": [{
  																																																		"name": "Front Office Executive",
  																																																		"value": 1,
  																																																		"type": "black",
  																																																		"level": "red",
  																																																		"male": 0,
  																																																		"female": 1,

  																																																	}]
  																																																}
  																																															]

  																																														},
  																																														{
  																																															"name": "Intern",
  																																															"value": 5,
  																																															"type": "steelblue",
  																																															"level": "red",
  																																															"male": 0,
  																																															"female": 5,

  																																														},

  																																													]
  																																												},

  																																											]
  																																										},
  																																										{
  																																											"name": "Technology",
  																																											"value": 32,
  																																											"type": "black",
  																																											"level": "red",
  																																											"male": 26,
  																																											"female": 6,
  																																											"children": [{
  																																													"name": "Top Management",
  																																													"value": 6,
  																																													"type": "grey",
  																																													"level": "red",
  																																													"male": 6,
  																																													"female": 0,
  																																													"children": [{
  																																															"name": "Engineering Manager",
  																																															"value": 1,
  																																															"type": "grey",
  																																															"level": "red",
  																																															"male": 1,
  																																															"female": 0,

  																																														},
  																																														{
  																																															"name": "Product Manager",
  																																															"value": 1,
  																																															"type": "grey",
  																																															"level": "red",
  																																															"male": 1,
  																																															"female": 0,

  																																														},

  																																													]
  																																												},
  																																												{
  																																													"name": "Junior Level",
  																																													"value": 21,
  																																													"type": "grey",
  																																													"level": "red",
  																																													"male": 16,
  																																													"female": 5,
  																																													"children": [{
  																																															"name": "System Administrator",
  																																															"value": 1,
  																																															"type": "grey",
  																																															"level": "red",
  																																															"male": 1,
  																																															"female": 0,

  																																														},
  																																														{
  																																															"name": "Support Engineer",
  																																															"value": 1,
  																																															"type": "grey",
  																																															"level": "red",
  																																															"male": 1,
  																																															"female": 0,
  																																															"children": [{
  																																																	"name": "Operation",
  																																																	"value": 40,
  																																																	"type": "black",
  																																																	"level": "green",
  																																																	"male": 23,
  																																																	"female": 17,

  																																																	"children": [{
  																																																			"name": "Top Management",
  																																																			"value": 3,
  																																																			"type": "grey",
  																																																			"level": "red",
  																																																			"male": 3,
  																																																			"female": 0,

  																																																			"children": [{
  																																																					"name": "Operation Manager",
  																																																					"value": 1,
  																																																					"type": "steelblue",
  																																																					"level": "orange",
  																																																					"male": 1,
  																																																					"female": 0,

  																																																				},
  																																																				{
  																																																					"name": "Account Strategist",
  																																																					"value": 1,
  																																																					"type": "steelblue",
  																																																					"level": "red",
  																																																					"male": 1,
  																																																					"female": 0,

  																																																				},

  																																																			]
  																																																		},
  																																																		{
  																																																			"name": "Junior Level",
  																																																			"value": 23,
  																																																			"type": "grey",
  																																																			"level": "green",
  																																																			"male": 10,
  																																																			"female": 13,

  																																																			"children": [{
  																																																					"name": "Analyst",
  																																																					"value": 10,
  																																																					"type": "steelblue",
  																																																					"level": "orange",
  																																																					"male": 7,
  																																																					"female": 3,

  																																																					"children": [{
  																																																							"name": "Top Management",
  																																																							"value": 2,
  																																																							"type": "black",
  																																																							"level": "red",
  																																																							"male": 2,
  																																																							"female": 0,

  																																																							"children": [{
  																																																									"name": "Director",
  																																																									"value": 1,
  																																																									"type": "black",
  																																																									"level": "red",
  																																																									"male": 1,
  																																																									"female": 0,

  																																																								},
  																																																								{
  																																																									"name": "HR Manager",
  																																																									"value": 1,
  																																																									"type": "black",
  																																																									"level": "red",
  																																																									"male": 1,
  																																																									"female": 0,

  																																																								}
  																																																							]
  																																																						},
  																																																						{
  																																																							"name": "Middle Management",
  																																																							"value": 1,
  																																																							"type": "black",
  																																																							"level": "red",
  																																																							"male": 0,
  																																																							"female": 1,
  																																																							"children": [{
  																																																								"name": "Front Office Executive",
  																																																								"value": 1,
  																																																								"type": "black",
  																																																								"level": "red",
  																																																								"male": 0,
  																																																								"female": 1,

  																																																							}]
  																																																						}
  																																																					]

  																																																				},
  																																																				{
  																																																					"name": "Intern",
  																																																					"value": 5,
  																																																					"type": "steelblue",
  																																																					"level": "red",
  																																																					"male": 0,
  																																																					"female": 5,

  																																																				},

  																																																			]
  																																																		},

  																																																	]
  																																																},
  																																																{
  																																																	"name": "Technology",
  																																																	"value": 32,
  																																																	"type": "black",
  																																																	"level": "red",
  																																																	"male": 26,
  																																																	"female": 6,
  																																																	"children": [{
  																																																			"name": "Top Management",
  																																																			"value": 6,
  																																																			"type": "grey",
  																																																			"level": "red",
  																																																			"male": 6,
  																																																			"female": 0,
  																																																			"children": [{
  																																																					"name": "Engineering Manager",
  																																																					"value": 1,
  																																																					"type": "grey",
  																																																					"level": "red",
  																																																					"male": 1,
  																																																					"female": 0,

  																																																				},
  																																																				{
  																																																					"name": "Product Manager",
  																																																					"value": 1,
  																																																					"type": "grey",
  																																																					"level": "red",
  																																																					"male": 1,
  																																																					"female": 0,

  																																																				},

  																																																			]
  																																																		},
  																																																		{
  																																																			"name": "Junior Level",
  																																																			"value": 21,
  																																																			"type": "grey",
  																																																			"level": "red",
  																																																			"male": 16,
  																																																			"female": 5,
  																																																			"children": [{
  																																																					"name": "System Administrator",
  																																																					"value": 1,
  																																																					"type": "grey",
  																																																					"level": "red",
  																																																					"male": 1,
  																																																					"female": 0,

  																																																				},
  																																																				{
  																																																					"name": "Support Engineer",
  																																																					"value": 1,
  																																																					"type": "grey",
  																																																					"level": "red",
  																																																					"male": 1,
  																																																					"female": 0,

  																																																				},

  																																																			]
  																																																		},

  																																																	]
  																																																},

  																																															]
  																																														},

  																																													]
  																																												},

  																																											]
  																																										},

  																																									]

  																																								},
  																																								{
  																																									"name": "Support Engineer",
  																																									"value": 1,
  																																									"type": "grey",
  																																									"level": "red",
  																																									"male": 1,
  																																									"female": 0,
  																																									"children": [{
  																																											"name": "Operation",
  																																											"value": 40,
  																																											"type": "black",
  																																											"level": "green",
  																																											"male": 23,
  																																											"female": 17,

  																																											"children": [{
  																																													"name": "Top Management",
  																																													"value": 3,
  																																													"type": "grey",
  																																													"level": "red",
  																																													"male": 3,
  																																													"female": 0,

  																																													"children": [{
  																																															"name": "Operation Manager",
  																																															"value": 1,
  																																															"type": "steelblue",
  																																															"level": "orange",
  																																															"male": 1,
  																																															"female": 0,

  																																														},
  																																														{
  																																															"name": "Account Strategist",
  																																															"value": 1,
  																																															"type": "steelblue",
  																																															"level": "red",
  																																															"male": 1,
  																																															"female": 0,

  																																														},

  																																													]
  																																												},
  																																												{
  																																													"name": "Junior Level",
  																																													"value": 23,
  																																													"type": "grey",
  																																													"level": "green",
  																																													"male": 10,
  																																													"female": 13,

  																																													"children": [{
  																																															"name": "Analyst",
  																																															"value": 10,
  																																															"type": "steelblue",
  																																															"level": "orange",
  																																															"male": 7,
  																																															"female": 3,

  																																															"children": [{
  																																																	"name": "Top Management",
  																																																	"value": 2,
  																																																	"type": "black",
  																																																	"level": "red",
  																																																	"male": 2,
  																																																	"female": 0,

  																																																	"children": [{
  																																																			"name": "Director",
  																																																			"value": 1,
  																																																			"type": "black",
  																																																			"level": "red",
  																																																			"male": 1,
  																																																			"female": 0,

  																																																		},
  																																																		{
  																																																			"name": "HR Manager",
  																																																			"value": 1,
  																																																			"type": "black",
  																																																			"level": "red",
  																																																			"male": 1,
  																																																			"female": 0,

  																																																		}
  																																																	]
  																																																},
  																																																{
  																																																	"name": "Middle Management",
  																																																	"value": 1,
  																																																	"type": "black",
  																																																	"level": "red",
  																																																	"male": 0,
  																																																	"female": 1,
  																																																	"children": [{
  																																																		"name": "Front Office Executive",
  																																																		"value": 1,
  																																																		"type": "black",
  																																																		"level": "red",
  																																																		"male": 0,
  																																																		"female": 1,
  																																																		"children": [{
  																																																				"name": "Operation",
  																																																				"value": 40,
  																																																				"type": "black",
  																																																				"level": "green",
  																																																				"male": 23,
  																																																				"female": 17,

  																																																				"children": [{
  																																																						"name": "Top Management",
  																																																						"value": 3,
  																																																						"type": "grey",
  																																																						"level": "red",
  																																																						"male": 3,
  																																																						"female": 0,

  																																																						"children": [{
  																																																								"name": "Operation Manager",
  																																																								"value": 1,
  																																																								"type": "steelblue",
  																																																								"level": "orange",
  																																																								"male": 1,
  																																																								"female": 0,

  																																																							},
  																																																							{
  																																																								"name": "Account Strategist",
  																																																								"value": 1,
  																																																								"type": "steelblue",
  																																																								"level": "red",
  																																																								"male": 1,
  																																																								"female": 0,

  																																																							},

  																																																						]
  																																																					},
  																																																					{
  																																																						"name": "Junior Level",
  																																																						"value": 23,
  																																																						"type": "grey",
  																																																						"level": "green",
  																																																						"male": 10,
  																																																						"female": 13,

  																																																						"children": [{
  																																																								"name": "Analyst",
  																																																								"value": 10,
  																																																								"type": "steelblue",
  																																																								"level": "orange",
  																																																								"male": 7,
  																																																								"female": 3,

  																																																								"children": [{
  																																																										"name": "Top Management",
  																																																										"value": 2,
  																																																										"type": "black",
  																																																										"level": "red",
  																																																										"male": 2,
  																																																										"female": 0,

  																																																										"children": [{
  																																																												"name": "Director",
  																																																												"value": 1,
  																																																												"type": "black",
  																																																												"level": "red",
  																																																												"male": 1,
  																																																												"female": 0,

  																																																											},
  																																																											{
  																																																												"name": "HR Manager",
  																																																												"value": 1,
  																																																												"type": "black",
  																																																												"level": "red",
  																																																												"male": 1,
  																																																												"female": 0,

  																																																											}
  																																																										]
  																																																									},
  																																																									{
  																																																										"name": "Middle Management",
  																																																										"value": 1,
  																																																										"type": "black",
  																																																										"level": "red",
  																																																										"male": 0,
  																																																										"female": 1,
  																																																										"children": [{
  																																																											"name": "Front Office Executive",
  																																																											"value": 1,
  																																																											"type": "black",
  																																																											"level": "red",
  																																																											"male": 0,
  																																																											"female": 1,

  																																																										}]
  																																																									}
  																																																								]

  																																																							},
  																																																							{
  																																																								"name": "Intern",
  																																																								"value": 5,
  																																																								"type": "steelblue",
  																																																								"level": "red",
  																																																								"male": 0,
  																																																								"female": 5,

  																																																							},

  																																																						]
  																																																					},

  																																																				]
  																																																			},
  																																																			{
  																																																				"name": "Technology",
  																																																				"value": 32,
  																																																				"type": "black",
  																																																				"level": "red",
  																																																				"male": 26,
  																																																				"female": 6,
  																																																				"children": [{
  																																																						"name": "Top Management",
  																																																						"value": 6,
  																																																						"type": "grey",
  																																																						"level": "red",
  																																																						"male": 6,
  																																																						"female": 0,
  																																																						"children": [{
  																																																								"name": "Engineering Manager",
  																																																								"value": 1,
  																																																								"type": "grey",
  																																																								"level": "red",
  																																																								"male": 1,
  																																																								"female": 0,

  																																																							},
  																																																							{
  																																																								"name": "Product Manager",
  																																																								"value": 1,
  																																																								"type": "grey",
  																																																								"level": "red",
  																																																								"male": 1,
  																																																								"female": 0,

  																																																							},

  																																																						]
  																																																					},
  																																																					{
  																																																						"name": "Junior Level",
  																																																						"value": 21,
  																																																						"type": "grey",
  																																																						"level": "red",
  																																																						"male": 16,
  																																																						"female": 5,
  																																																						"children": [{
  																																																								"name": "System Administrator",
  																																																								"value": 1,
  																																																								"type": "grey",
  																																																								"level": "red",
  																																																								"male": 1,
  																																																								"female": 0,

  																																																							},
  																																																							{
  																																																								"name": "Support Engineer",
  																																																								"value": 1,
  																																																								"type": "grey",
  																																																								"level": "red",
  																																																								"male": 1,
  																																																								"female": 0,

  																																																							},

  																																																						]
  																																																					},

  																																																				]
  																																																			},

  																																																		]
  																																																	}]
  																																																}
  																																															]

  																																														},
  																																														{
  																																															"name": "Intern",
  																																															"value": 5,
  																																															"type": "steelblue",
  																																															"level": "red",
  																																															"male": 0,
  																																															"female": 5,

  																																														},

  																																													]
  																																												},

  																																											]
  																																										},
  																																										{
  																																											"name": "Technology",
  																																											"value": 32,
  																																											"type": "black",
  																																											"level": "red",
  																																											"male": 26,
  																																											"female": 6,
  																																											"children": [{
  																																													"name": "Top Management",
  																																													"value": 6,
  																																													"type": "grey",
  																																													"level": "red",
  																																													"male": 6,
  																																													"female": 0,
  																																													"children": [{
  																																															"name": "Engineering Manager",
  																																															"value": 1,
  																																															"type": "grey",
  																																															"level": "red",
  																																															"male": 1,
  																																															"female": 0,

  																																														},
  																																														{
  																																															"name": "Product Manager",
  																																															"value": 1,
  																																															"type": "grey",
  																																															"level": "red",
  																																															"male": 1,
  																																															"female": 0,

  																																														},

  																																													]
  																																												},
  																																												{
  																																													"name": "Junior Level",
  																																													"value": 21,
  																																													"type": "grey",
  																																													"level": "red",
  																																													"male": 16,
  																																													"female": 5,
  																																													"children": [{
  																																															"name": "System Administrator",
  																																															"value": 1,
  																																															"type": "grey",
  																																															"level": "red",
  																																															"male": 1,
  																																															"female": 0,
  																																															"children": [{
  																																																	"name": "Operation",
  																																																	"value": 40,
  																																																	"type": "black",
  																																																	"level": "green",
  																																																	"male": 23,
  																																																	"female": 17,

  																																																	"children": [{
  																																																			"name": "Top Management",
  																																																			"value": 3,
  																																																			"type": "grey",
  																																																			"level": "red",
  																																																			"male": 3,
  																																																			"female": 0,

  																																																			"children": [{
  																																																					"name": "Operation Manager",
  																																																					"value": 1,
  																																																					"type": "steelblue",
  																																																					"level": "orange",
  																																																					"male": 1,
  																																																					"female": 0,

  																																																				},
  																																																				{
  																																																					"name": "Account Strategist",
  																																																					"value": 1,
  																																																					"type": "steelblue",
  																																																					"level": "red",
  																																																					"male": 1,
  																																																					"female": 0,

  																																																				},

  																																																			]
  																																																		},
  																																																		{
  																																																			"name": "Junior Level",
  																																																			"value": 23,
  																																																			"type": "grey",
  																																																			"level": "green",
  																																																			"male": 10,
  																																																			"female": 13,

  																																																			"children": [{
  																																																					"name": "Analyst",
  																																																					"value": 10,
  																																																					"type": "steelblue",
  																																																					"level": "orange",
  																																																					"male": 7,
  																																																					"female": 3,

  																																																					"children": [{
  																																																							"name": "Top Management",
  																																																							"value": 2,
  																																																							"type": "black",
  																																																							"level": "red",
  																																																							"male": 2,
  																																																							"female": 0,

  																																																							"children": [{
  																																																									"name": "Director",
  																																																									"value": 1,
  																																																									"type": "black",
  																																																									"level": "red",
  																																																									"male": 1,
  																																																									"female": 0,

  																																																								},
  																																																								{
  																																																									"name": "HR Manager",
  																																																									"value": 1,
  																																																									"type": "black",
  																																																									"level": "red",
  																																																									"male": 1,
  																																																									"female": 0,

  																																																								}
  																																																							]
  																																																						},
  																																																						{
  																																																							"name": "Middle Management",
  																																																							"value": 1,
  																																																							"type": "black",
  																																																							"level": "red",
  																																																							"male": 0,
  																																																							"female": 1,
  																																																							"children": [{
  																																																								"name": "Front Office Executive",
  																																																								"value": 1,
  																																																								"type": "black",
  																																																								"level": "red",
  																																																								"male": 0,
  																																																								"female": 1,

  																																																							}]
  																																																						}
  																																																					]

  																																																				},
  																																																				{
  																																																					"name": "Intern",
  																																																					"value": 5,
  																																																					"type": "steelblue",
  																																																					"level": "red",
  																																																					"male": 0,
  																																																					"female": 5,

  																																																				},

  																																																			]
  																																																		},

  																																																	]
  																																																},
  																																																{
  																																																	"name": "Technology",
  																																																	"value": 32,
  																																																	"type": "black",
  																																																	"level": "red",
  																																																	"male": 26,
  																																																	"female": 6,
  																																																	"children": [{
  																																																			"name": "Top Management",
  																																																			"value": 6,
  																																																			"type": "grey",
  																																																			"level": "red",
  																																																			"male": 6,
  																																																			"female": 0,
  																																																			"children": [{
  																																																					"name": "Engineering Manager",
  																																																					"value": 1,
  																																																					"type": "grey",
  																																																					"level": "red",
  																																																					"male": 1,
  																																																					"female": 0,

  																																																				},
  																																																				{
  																																																					"name": "Product Manager",
  																																																					"value": 1,
  																																																					"type": "grey",
  																																																					"level": "red",
  																																																					"male": 1,
  																																																					"female": 0,

  																																																				},

  																																																			]
  																																																		},
  																																																		{
  																																																			"name": "Junior Level",
  																																																			"value": 21,
  																																																			"type": "grey",
  																																																			"level": "red",
  																																																			"male": 16,
  																																																			"female": 5,
  																																																			"children": [{
  																																																					"name": "System Administrator",
  																																																					"value": 1,
  																																																					"type": "grey",
  																																																					"level": "red",
  																																																					"male": 1,
  																																																					"female": 0,

  																																																				},
  																																																				{
  																																																					"name": "Support Engineer",
  																																																					"value": 1,
  																																																					"type": "grey",
  																																																					"level": "red",
  																																																					"male": 1,
  																																																					"female": 0,
  																																																					"children": [{
  																																																							"name": "Operation",
  																																																							"value": 40,
  																																																							"type": "black",
  																																																							"level": "green",
  																																																							"male": 23,
  																																																							"female": 17,

  																																																							"children": [{
  																																																									"name": "Top Management",
  																																																									"value": 3,
  																																																									"type": "grey",
  																																																									"level": "red",
  																																																									"male": 3,
  																																																									"female": 0,

  																																																									"children": [{
  																																																											"name": "Operation Manager",
  																																																											"value": 1,
  																																																											"type": "steelblue",
  																																																											"level": "orange",
  																																																											"male": 1,
  																																																											"female": 0,

  																																																										},
  																																																										{
  																																																											"name": "Account Strategist",
  																																																											"value": 1,
  																																																											"type": "steelblue",
  																																																											"level": "red",
  																																																											"male": 1,
  																																																											"female": 0,

  																																																										},

  																																																									]
  																																																								},
  																																																								{
  																																																									"name": "Junior Level",
  																																																									"value": 23,
  																																																									"type": "grey",
  																																																									"level": "green",
  																																																									"male": 10,
  																																																									"female": 13,

  																																																									"children": [{
  																																																											"name": "Analyst",
  																																																											"value": 10,
  																																																											"type": "steelblue",
  																																																											"level": "orange",
  																																																											"male": 7,
  																																																											"female": 3,

  																																																											"children": [{
  																																																													"name": "Top Management",
  																																																													"value": 2,
  																																																													"type": "black",
  																																																													"level": "red",
  																																																													"male": 2,
  																																																													"female": 0,

  																																																													"children": [{
  																																																															"name": "Director",
  																																																															"value": 1,
  																																																															"type": "black",
  																																																															"level": "red",
  																																																															"male": 1,
  																																																															"female": 0,

  																																																														},
  																																																														{
  																																																															"name": "HR Manager",
  																																																															"value": 1,
  																																																															"type": "black",
  																																																															"level": "red",
  																																																															"male": 1,
  																																																															"female": 0,

  																																																														}
  																																																													]
  																																																												},
  																																																												{
  																																																													"name": "Middle Management",
  																																																													"value": 1,
  																																																													"type": "black",
  																																																													"level": "red",
  																																																													"male": 0,
  																																																													"female": 1,
  																																																													"children": [{
  																																																														"name": "Front Office Executive",
  																																																														"value": 1,
  																																																														"type": "black",
  																																																														"level": "red",
  																																																														"male": 0,
  																																																														"female": 1,

  																																																													}]
  																																																												}
  																																																											]

  																																																										},
  																																																										{
  																																																											"name": "Intern",
  																																																											"value": 5,
  																																																											"type": "steelblue",
  																																																											"level": "red",
  																																																											"male": 0,
  																																																											"female": 5,

  																																																										},

  																																																									]
  																																																								},

  																																																							]
  																																																						},
  																																																						{
  																																																							"name": "Technology",
  																																																							"value": 32,
  																																																							"type": "black",
  																																																							"level": "red",
  																																																							"male": 26,
  																																																							"female": 6,
  																																																							"children": [{
  																																																									"name": "Top Management",
  																																																									"value": 6,
  																																																									"type": "grey",
  																																																									"level": "red",
  																																																									"male": 6,
  																																																									"female": 0,
  																																																									"children": [{
  																																																											"name": "Engineering Manager",
  																																																											"value": 1,
  																																																											"type": "grey",
  																																																											"level": "red",
  																																																											"male": 1,
  																																																											"female": 0,

  																																																										},
  																																																										{
  																																																											"name": "Product Manager",
  																																																											"value": 1,
  																																																											"type": "grey",
  																																																											"level": "red",
  																																																											"male": 1,
  																																																											"female": 0,

  																																																										},

  																																																									]
  																																																								},
  																																																								{
  																																																									"name": "Junior Level",
  																																																									"value": 21,
  																																																									"type": "grey",
  																																																									"level": "red",
  																																																									"male": 16,
  																																																									"female": 5,
  																																																									"children": [{
  																																																											"name": "System Administrator",
  																																																											"value": 1,
  																																																											"type": "grey",
  																																																											"level": "red",
  																																																											"male": 1,
  																																																											"female": 0,

  																																																										},
  																																																										{
  																																																											"name": "Support Engineer",
  																																																											"value": 1,
  																																																											"type": "grey",
  																																																											"level": "red",
  																																																											"male": 1,
  																																																											"female": 0,

  																																																										},

  																																																									]
  																																																								},

  																																																							]
  																																																						},

  																																																					]
  																																																				},

  																																																			]
  																																																		},

  																																																	]
  																																																},

  																																															]

  																																														},
  																																														{
  																																															"name": "Support Engineer",
  																																															"value": 1,
  																																															"type": "grey",
  																																															"level": "red",
  																																															"male": 1,
  																																															"female": 0,
  																																															"children": [{
  																																																	"name": "Operation",
  																																																	"value": 40,
  																																																	"type": "black",
  																																																	"level": "green",
  																																																	"male": 23,
  																																																	"female": 17,

  																																																	"children": [{
  																																																			"name": "Top Management",
  																																																			"value": 3,
  																																																			"type": "grey",
  																																																			"level": "red",
  																																																			"male": 3,
  																																																			"female": 0,

  																																																			"children": [{
  																																																					"name": "Operation Manager",
  																																																					"value": 1,
  																																																					"type": "steelblue",
  																																																					"level": "orange",
  																																																					"male": 1,
  																																																					"female": 0,

  																																																				},
  																																																				{
  																																																					"name": "Account Strategist",
  																																																					"value": 1,
  																																																					"type": "steelblue",
  																																																					"level": "red",
  																																																					"male": 1,
  																																																					"female": 0,

  																																																				},

  																																																			]
  																																																		},
  																																																		{
  																																																			"name": "Junior Level",
  																																																			"value": 23,
  																																																			"type": "grey",
  																																																			"level": "green",
  																																																			"male": 10,
  																																																			"female": 13,

  																																																			"children": [{
  																																																					"name": "Analyst",
  																																																					"value": 10,
  																																																					"type": "steelblue",
  																																																					"level": "orange",
  																																																					"male": 7,
  																																																					"female": 3,

  																																																					"children": [{
  																																																							"name": "Top Management",
  																																																							"value": 2,
  																																																							"type": "black",
  																																																							"level": "red",
  																																																							"male": 2,
  																																																							"female": 0,

  																																																							"children": [{
  																																																									"name": "Director",
  																																																									"value": 1,
  																																																									"type": "black",
  																																																									"level": "red",
  																																																									"male": 1,
  																																																									"female": 0,

  																																																								},
  																																																								{
  																																																									"name": "HR Manager",
  																																																									"value": 1,
  																																																									"type": "black",
  																																																									"level": "red",
  																																																									"male": 1,
  																																																									"female": 0,

  																																																								}
  																																																							]
  																																																						},
  																																																						{
  																																																							"name": "Middle Management",
  																																																							"value": 1,
  																																																							"type": "black",
  																																																							"level": "red",
  																																																							"male": 0,
  																																																							"female": 1,
  																																																							"children": [{
  																																																								"name": "Front Office Executive",
  																																																								"value": 1,
  																																																								"type": "black",
  																																																								"level": "red",
  																																																								"male": 0,
  																																																								"female": 1,
  																																																								"children": [{
  																																																										"name": "Operation",
  																																																										"value": 40,
  																																																										"type": "black",
  																																																										"level": "green",
  																																																										"male": 23,
  																																																										"female": 17,

  																																																										"children": [{
  																																																												"name": "Top Management",
  																																																												"value": 3,
  																																																												"type": "grey",
  																																																												"level": "red",
  																																																												"male": 3,
  																																																												"female": 0,

  																																																												"children": [{
  																																																														"name": "Operation Manager",
  																																																														"value": 1,
  																																																														"type": "steelblue",
  																																																														"level": "orange",
  																																																														"male": 1,
  																																																														"female": 0,

  																																																													},
  																																																													{
  																																																														"name": "Account Strategist",
  																																																														"value": 1,
  																																																														"type": "steelblue",
  																																																														"level": "red",
  																																																														"male": 1,
  																																																														"female": 0,

  																																																													},

  																																																												]
  																																																											},
  																																																											{
  																																																												"name": "Junior Level",
  																																																												"value": 23,
  																																																												"type": "grey",
  																																																												"level": "green",
  																																																												"male": 10,
  																																																												"female": 13,

  																																																												"children": [{
  																																																														"name": "Analyst",
  																																																														"value": 10,
  																																																														"type": "steelblue",
  																																																														"level": "orange",
  																																																														"male": 7,
  																																																														"female": 3,

  																																																														"children": [{
  																																																																"name": "Top Management",
  																																																																"value": 2,
  																																																																"type": "black",
  																																																																"level": "red",
  																																																																"male": 2,
  																																																																"female": 0,

  																																																																"children": [{
  																																																																		"name": "Director",
  																																																																		"value": 1,
  																																																																		"type": "black",
  																																																																		"level": "red",
  																																																																		"male": 1,
  																																																																		"female": 0,

  																																																																	},
  																																																																	{
  																																																																		"name": "HR Manager",
  																																																																		"value": 1,
  																																																																		"type": "black",
  																																																																		"level": "red",
  																																																																		"male": 1,
  																																																																		"female": 0,

  																																																																	}
  																																																																]
  																																																															},
  																																																															{
  																																																																"name": "Middle Management",
  																																																																"value": 1,
  																																																																"type": "black",
  																																																																"level": "red",
  																																																																"male": 0,
  																																																																"female": 1,
  																																																																"children": [{
  																																																																	"name": "Front Office Executive",
  																																																																	"value": 1,
  																																																																	"type": "black",
  																																																																	"level": "red",
  																																																																	"male": 0,
  																																																																	"female": 1,

  																																																																}]
  																																																															}
  																																																														]

  																																																													},
  																																																													{
  																																																														"name": "Intern",
  																																																														"value": 5,
  																																																														"type": "steelblue",
  																																																														"level": "red",
  																																																														"male": 0,
  																																																														"female": 5,

  																																																													},

  																																																												]
  																																																											},

  																																																										]
  																																																									},
  																																																									{
  																																																										"name": "Technology",
  																																																										"value": 32,
  																																																										"type": "black",
  																																																										"level": "red",
  																																																										"male": 26,
  																																																										"female": 6,
  																																																										"children": [{
  																																																												"name": "Top Management",
  																																																												"value": 6,
  																																																												"type": "grey",
  																																																												"level": "red",
  																																																												"male": 6,
  																																																												"female": 0,
  																																																												"children": [{
  																																																														"name": "Engineering Manager",
  																																																														"value": 1,
  																																																														"type": "grey",
  																																																														"level": "red",
  																																																														"male": 1,
  																																																														"female": 0,

  																																																													},
  																																																													{
  																																																														"name": "Product Manager",
  																																																														"value": 1,
  																																																														"type": "grey",
  																																																														"level": "red",
  																																																														"male": 1,
  																																																														"female": 0,

  																																																													},

  																																																												]
  																																																											},
  																																																											{
  																																																												"name": "Junior Level",
  																																																												"value": 21,
  																																																												"type": "grey",
  																																																												"level": "red",
  																																																												"male": 16,
  																																																												"female": 5,
  																																																												"children": [{
  																																																														"name": "System Administrator",
  																																																														"value": 1,
  																																																														"type": "grey",
  																																																														"level": "red",
  																																																														"male": 1,
  																																																														"female": 0,

  																																																													},
  																																																													{
  																																																														"name": "Support Engineer",
  																																																														"value": 1,
  																																																														"type": "grey",
  																																																														"level": "red",
  																																																														"male": 1,
  																																																														"female": 0,

  																																																													},

  																																																												]
  																																																											},

  																																																										]
  																																																									},

  																																																								]
  																																																							}]
  																																																						}
  																																																					]

  																																																				},
  																																																				{
  																																																					"name": "Intern",
  																																																					"value": 5,
  																																																					"type": "steelblue",
  																																																					"level": "red",
  																																																					"male": 0,
  																																																					"female": 5,

  																																																				},

  																																																			]
  																																																		},

  																																																	]
  																																																},
  																																																{
  																																																	"name": "Technology",
  																																																	"value": 32,
  																																																	"type": "black",
  																																																	"level": "red",
  																																																	"male": 26,
  																																																	"female": 6,
  																																																	"children": [{
  																																																			"name": "Top Management",
  																																																			"value": 6,
  																																																			"type": "grey",
  																																																			"level": "red",
  																																																			"male": 6,
  																																																			"female": 0,
  																																																			"children": [{
  																																																					"name": "Engineering Manager",
  																																																					"value": 1,
  																																																					"type": "grey",
  																																																					"level": "red",
  																																																					"male": 1,
  																																																					"female": 0,

  																																																				},
  																																																				{
  																																																					"name": "Product Manager",
  																																																					"value": 1,
  																																																					"type": "grey",
  																																																					"level": "red",
  																																																					"male": 1,
  																																																					"female": 0,

  																																																				},

  																																																			]
  																																																		},
  																																																		{
  																																																			"name": "Junior Level",
  																																																			"value": 21,
  																																																			"type": "grey",
  																																																			"level": "red",
  																																																			"male": 16,
  																																																			"female": 5,
  																																																			"children": [{
  																																																					"name": "System Administrator",
  																																																					"value": 1,
  																																																					"type": "grey",
  																																																					"level": "red",
  																																																					"male": 1,
  																																																					"female": 0,
  																																																					"children": [{
  																																																							"name": "Operation",
  																																																							"value": 40,
  																																																							"type": "black",
  																																																							"level": "green",
  																																																							"male": 23,
  																																																							"female": 17,

  																																																							"children": [{
  																																																									"name": "Top Management",
  																																																									"value": 3,
  																																																									"type": "grey",
  																																																									"level": "red",
  																																																									"male": 3,
  																																																									"female": 0,

  																																																									"children": [{
  																																																											"name": "Operation Manager",
  																																																											"value": 1,
  																																																											"type": "steelblue",
  																																																											"level": "orange",
  																																																											"male": 1,
  																																																											"female": 0,

  																																																										},
  																																																										{
  																																																											"name": "Account Strategist",
  																																																											"value": 1,
  																																																											"type": "steelblue",
  																																																											"level": "red",
  																																																											"male": 1,
  																																																											"female": 0,

  																																																										},

  																																																									]
  																																																								},
  																																																								{
  																																																									"name": "Junior Level",
  																																																									"value": 23,
  																																																									"type": "grey",
  																																																									"level": "green",
  																																																									"male": 10,
  																																																									"female": 13,

  																																																									"children": [{
  																																																											"name": "Analyst",
  																																																											"value": 10,
  																																																											"type": "steelblue",
  																																																											"level": "orange",
  																																																											"male": 7,
  																																																											"female": 3,

  																																																											"children": [{
  																																																													"name": "Top Management",
  																																																													"value": 2,
  																																																													"type": "black",
  																																																													"level": "red",
  																																																													"male": 2,
  																																																													"female": 0,

  																																																													"children": [{
  																																																															"name": "Director",
  																																																															"value": 1,
  																																																															"type": "black",
  																																																															"level": "red",
  																																																															"male": 1,
  																																																															"female": 0,

  																																																														},
  																																																														{
  																																																															"name": "HR Manager",
  																																																															"value": 1,
  																																																															"type": "black",
  																																																															"level": "red",
  																																																															"male": 1,
  																																																															"female": 0,

  																																																														}
  																																																													]
  																																																												},
  																																																												{
  																																																													"name": "Middle Management",
  																																																													"value": 1,
  																																																													"type": "black",
  																																																													"level": "red",
  																																																													"male": 0,
  																																																													"female": 1,
  																																																													"children": [{
  																																																														"name": "Front Office Executive",
  																																																														"value": 1,
  																																																														"type": "black",
  																																																														"level": "red",
  																																																														"male": 0,
  																																																														"female": 1,

  																																																													}]
  																																																												}
  																																																											]

  																																																										},
  																																																										{
  																																																											"name": "Intern",
  																																																											"value": 5,
  																																																											"type": "steelblue",
  																																																											"level": "red",
  																																																											"male": 0,
  																																																											"female": 5,

  																																																										},

  																																																									]
  																																																								},

  																																																							]
  																																																						},
  																																																						{
  																																																							"name": "Technology",
  																																																							"value": 32,
  																																																							"type": "black",
  																																																							"level": "red",
  																																																							"male": 26,
  																																																							"female": 6,
  																																																							"children": [{
  																																																									"name": "Top Management",
  																																																									"value": 6,
  																																																									"type": "grey",
  																																																									"level": "red",
  																																																									"male": 6,
  																																																									"female": 0,
  																																																									"children": [{
  																																																											"name": "Engineering Manager",
  																																																											"value": 1,
  																																																											"type": "grey",
  																																																											"level": "red",
  																																																											"male": 1,
  																																																											"female": 0,

  																																																										},
  																																																										{
  																																																											"name": "Product Manager",
  																																																											"value": 1,
  																																																											"type": "grey",
  																																																											"level": "red",
  																																																											"male": 1,
  																																																											"female": 0,

  																																																										},

  																																																									]
  																																																								},
  																																																								{
  																																																									"name": "Junior Level",
  																																																									"value": 21,
  																																																									"type": "grey",
  																																																									"level": "red",
  																																																									"male": 16,
  																																																									"female": 5,
  																																																									"children": [{
  																																																											"name": "System Administrator",
  																																																											"value": 1,
  																																																											"type": "grey",
  																																																											"level": "red",
  																																																											"male": 1,
  																																																											"female": 0,

  																																																										},
  																																																										{
  																																																											"name": "Support Engineer",
  																																																											"value": 1,
  																																																											"type": "grey",
  																																																											"level": "red",
  																																																											"male": 1,
  																																																											"female": 0,
  																																																											"children": [{
  																																																													"name": "Operation",
  																																																													"value": 40,
  																																																													"type": "black",
  																																																													"level": "green",
  																																																													"male": 23,
  																																																													"female": 17,

  																																																													"children": [{
  																																																															"name": "Top Management",
  																																																															"value": 3,
  																																																															"type": "grey",
  																																																															"level": "red",
  																																																															"male": 3,
  																																																															"female": 0,

  																																																															"children": [{
  																																																																	"name": "Operation Manager",
  																																																																	"value": 1,
  																																																																	"type": "steelblue",
  																																																																	"level": "orange",
  																																																																	"male": 1,
  																																																																	"female": 0,

  																																																																},
  																																																																{
  																																																																	"name": "Account Strategist",
  																																																																	"value": 1,
  																																																																	"type": "steelblue",
  																																																																	"level": "red",
  																																																																	"male": 1,
  																																																																	"female": 0,

  																																																																},

  																																																															]
  																																																														},
  																																																														{
  																																																															"name": "Junior Level",
  																																																															"value": 23,
  																																																															"type": "grey",
  																																																															"level": "green",
  																																																															"male": 10,
  																																																															"female": 13,

  																																																															"children": [{
  																																																																	"name": "Analyst",
  																																																																	"value": 10,
  																																																																	"type": "steelblue",
  																																																																	"level": "orange",
  																																																																	"male": 7,
  																																																																	"female": 3,

  																																																																	"children": [{
  																																																																			"name": "Top Management",
  																																																																			"value": 2,
  																																																																			"type": "black",
  																																																																			"level": "red",
  																																																																			"male": 2,
  																																																																			"female": 0,

  																																																																			"children": [{
  																																																																					"name": "Director",
  																																																																					"value": 1,
  																																																																					"type": "black",
  																																																																					"level": "red",
  																																																																					"male": 1,
  																																																																					"female": 0,

  																																																																				},
  																																																																				{
  																																																																					"name": "HR Manager",
  																																																																					"value": 1,
  																																																																					"type": "black",
  																																																																					"level": "red",
  																																																																					"male": 1,
  																																																																					"female": 0,

  																																																																				}
  																																																																			]
  																																																																		},
  																																																																		{
  																																																																			"name": "Middle Management",
  																																																																			"value": 1,
  																																																																			"type": "black",
  																																																																			"level": "red",
  																																																																			"male": 0,
  																																																																			"female": 1,
  																																																																			"children": [{
  																																																																				"name": "Front Office Executive",
  																																																																				"value": 1,
  																																																																				"type": "black",
  																																																																				"level": "red",
  																																																																				"male": 0,
  																																																																				"female": 1,

  																																																																			}]
  																																																																		}
  																																																																	]

  																																																																},
  																																																																{
  																																																																	"name": "Intern",
  																																																																	"value": 5,
  																																																																	"type": "steelblue",
  																																																																	"level": "red",
  																																																																	"male": 0,
  																																																																	"female": 5,

  																																																																},

  																																																															]
  																																																														},

  																																																													]
  																																																												},
  																																																												{
  																																																													"name": "Technology",
  																																																													"value": 32,
  																																																													"type": "black",
  																																																													"level": "red",
  																																																													"male": 26,
  																																																													"female": 6,
  																																																													"children": [{
  																																																															"name": "Top Management",
  																																																															"value": 6,
  																																																															"type": "grey",
  																																																															"level": "red",
  																																																															"male": 6,
  																																																															"female": 0,
  																																																															"children": [{
  																																																																	"name": "Engineering Manager",
  																																																																	"value": 1,
  																																																																	"type": "grey",
  																																																																	"level": "red",
  																																																																	"male": 1,
  																																																																	"female": 0,

  																																																																},
  																																																																{
  																																																																	"name": "Product Manager",
  																																																																	"value": 1,
  																																																																	"type": "grey",
  																																																																	"level": "red",
  																																																																	"male": 1,
  																																																																	"female": 0,

  																																																																},

  																																																															]
  																																																														},
  																																																														{
  																																																															"name": "Junior Level",
  																																																															"value": 21,
  																																																															"type": "grey",
  																																																															"level": "red",
  																																																															"male": 16,
  																																																															"female": 5,
  																																																															"children": [{
  																																																																	"name": "System Administrator",
  																																																																	"value": 1,
  																																																																	"type": "grey",
  																																																																	"level": "red",
  																																																																	"male": 1,
  																																																																	"female": 0,

  																																																																},
  																																																																{
  																																																																	"name": "Support Engineer",
  																																																																	"value": 1,
  																																																																	"type": "grey",
  																																																																	"level": "red",
  																																																																	"male": 1,
  																																																																	"female": 0,

  																																																																},

  																																																															]
  																																																														},

  																																																													]
  																																																												},

  																																																											]
  																																																										},

  																																																									]
  																																																								},

  																																																							]
  																																																						},

  																																																					]

  																																																				},
  																																																				{
  																																																					"name": "Support Engineer",
  																																																					"value": 1,
  																																																					"type": "grey",
  																																																					"level": "red",
  																																																					"male": 1,
  																																																					"female": 0,

  																																																				},

  																																																			]
  																																																		},

  																																																	]
  																																																},

  																																															]
  																																														},

  																																													]
  																																												},

  																																											]
  																																										},

  																																									]
  																																								},

  																																							]
  																																						},

  																																					]
  																																				},

  																																			]
  																																		},

  																																	]
  																																},

  																															]
  																														},

  																													]
  																												},

  																											]
  																										},

  																									]
  																								},

  																							]
  																						},

  																					]
  																				},

  																			]
  																		},

  																	]
  																},

  															]
  														},

  													]
  												},

  											]
  										},
  										{
  											"name": "HR Manager",
  											"value": 1,
  											"type": "black",
  											"level": "red",
  											"male": 1,
  											"female": 0,

  										}
  									]
  								},
  								{
  									"name": "Middle Management",
  									"value": 1,
  									"type": "black",
  									"level": "red",
  									"male": 0,
  									"female": 1,
  									"children": [{
  										"name": "Front Office Executive",
  										"value": 1,
  										"type": "black",
  										"level": "red",
  										"male": 0,
  										"female": 1,
  										"children": [{
  												"name": "Operation",
  												"value": 40,
  												"type": "black",
  												"level": "green",
  												"male": 23,
  												"female": 17,

  												"children": [{
  														"name": "Top Management",
  														"value": 3,
  														"type": "grey",
  														"level": "red",
  														"male": 3,
  														"female": 0,

  														"children": [{
  																"name": "Operation Manager",
  																"value": 1,
  																"type": "steelblue",
  																"level": "orange",
  																"male": 1,
  																"female": 0,

  															},
  															{
  																"name": "Account Strategist",
  																"value": 1,
  																"type": "steelblue",
  																"level": "red",
  																"male": 1,
  																"female": 0,

  															},

  														]
  													},
  													{
  														"name": "Junior Level",
  														"value": 23,
  														"type": "grey",
  														"level": "green",
  														"male": 10,
  														"female": 13,

  														"children": [{
  																"name": "Analyst",
  																"value": 10,
  																"type": "steelblue",
  																"level": "orange",
  																"male": 7,
  																"female": 3,

  																"children": [{
  																		"name": "Top Management",
  																		"value": 2,
  																		"type": "black",
  																		"level": "red",
  																		"male": 2,
  																		"female": 0,

  																		"children": [{
  																				"name": "Director",
  																				"value": 1,
  																				"type": "black",
  																				"level": "red",
  																				"male": 1,
  																				"female": 0,

  																			},
  																			{
  																				"name": "HR Manager",
  																				"value": 1,
  																				"type": "black",
  																				"level": "red",
  																				"male": 1,
  																				"female": 0,

  																			}
  																		]
  																	},
  																	{
  																		"name": "Middle Management",
  																		"value": 1,
  																		"type": "black",
  																		"level": "red",
  																		"male": 0,
  																		"female": 1,
  																		"children": [{
  																			"name": "Front Office Executive",
  																			"value": 1,
  																			"type": "black",
  																			"level": "red",
  																			"male": 0,
  																			"female": 1,

  																		}]
  																	}
  																]

  															},
  															{
  																"name": "Intern",
  																"value": 5,
  																"type": "steelblue",
  																"level": "red",
  																"male": 0,
  																"female": 5,

  															},

  														]
  													},

  												]
  											},
  											{
  												"name": "Technology",
  												"value": 32,
  												"type": "black",
  												"level": "red",
  												"male": 26,
  												"female": 6,
  												"children": [{
  														"name": "Top Management",
  														"value": 6,
  														"type": "grey",
  														"level": "red",
  														"male": 6,
  														"female": 0,
  														"children": [{
  																"name": "Engineering Manager",
  																"value": 1,
  																"type": "grey",
  																"level": "red",
  																"male": 1,
  																"female": 0,

  															},
  															{
  																"name": "Product Manager",
  																"value": 1,
  																"type": "grey",
  																"level": "red",
  																"male": 1,
  																"female": 0,

  															},

  														]
  													},
  													{
  														"name": "Junior Level",
  														"value": 21,
  														"type": "grey",
  														"level": "red",
  														"male": 16,
  														"female": 5,
  														"children": [{
  																"name": "System Administrator",
  																"value": 1,
  																"type": "grey",
  																"level": "red",
  																"male": 1,
  																"female": 0,

  															},
  															{
  																"name": "Support Engineer",
  																"value": 1,
  																"type": "grey",
  																"level": "red",
  																"male": 1,
  																"female": 0,

  															},

  														]
  													},

  												]
  											},

  										]
  									}]
  								}
  							]

  						},
  						{
  							"name": "Intern",
  							"value": 5,
  							"type": "steelblue",
  							"level": "red",
  							"male": 0,
  							"female": 5,

  						},

  					]
  				},

  			]
  		},
  		{
  			"name": "Technology",
  			"value": 32,
  			"type": "black",
  			"level": "red",
  			"male": 26,
  			"female": 6,
  			"children": [{
  					"name": "Top Management",
  					"value": 6,
  					"type": "grey",
  					"level": "red",
  					"male": 6,
  					"female": 0,
  					"children": [{
  							"name": "Engineering Manager",
  							"value": 1,
  							"type": "grey",
  							"level": "red",
  							"male": 1,
  							"female": 0,

  						},
  						{
  							"name": "Product Manager",
  							"value": 1,
  							"type": "grey",
  							"level": "red",
  							"male": 1,
  							"female": 0,

  						},

  					]
  				},
  				{
  					"name": "Junior Level",
  					"value": 21,
  					"type": "grey",
  					"level": "red",
  					"male": 16,
  					"female": 5,
  					"children": [{
  							"name": "System Administrator",
  							"value": 1,
  							"type": "grey",
  							"level": "red",
  							"male": 1,
  							"female": 0,
  							"children": [{
  									"name": "Operation",
  									"value": 40,
  									"type": "black",
  									"level": "green",
  									"male": 23,
  									"female": 17,

  									"children": [{
  											"name": "Top Management",
  											"value": 3,
  											"type": "grey",
  											"level": "red",
  											"male": 3,
  											"female": 0,

  											"children": [{
  													"name": "Operation Manager",
  													"value": 1,
  													"type": "steelblue",
  													"level": "orange",
  													"male": 1,
  													"female": 0,

  												},
  												{
  													"name": "Account Strategist",
  													"value": 1,
  													"type": "steelblue",
  													"level": "red",
  													"male": 1,
  													"female": 0,

  												},

  											]
  										},
  										{
  											"name": "Junior Level",
  											"value": 23,
  											"type": "grey",
  											"level": "green",
  											"male": 10,
  											"female": 13,

  											"children": [{
  													"name": "Analyst",
  													"value": 10,
  													"type": "steelblue",
  													"level": "orange",
  													"male": 7,
  													"female": 3,

  													"children": [{
  															"name": "Top Management",
  															"value": 2,
  															"type": "black",
  															"level": "red",
  															"male": 2,
  															"female": 0,

  															"children": [{
  																	"name": "Director",
  																	"value": 1,
  																	"type": "black",
  																	"level": "red",
  																	"male": 1,
  																	"female": 0,

  																},
  																{
  																	"name": "HR Manager",
  																	"value": 1,
  																	"type": "black",
  																	"level": "red",
  																	"male": 1,
  																	"female": 0,

  																}
  															]
  														},
  														{
  															"name": "Middle Management",
  															"value": 1,
  															"type": "black",
  															"level": "red",
  															"male": 0,
  															"female": 1,
  															"children": [{
  																"name": "Front Office Executive",
  																"value": 1,
  																"type": "black",
  																"level": "red",
  																"male": 0,
  																"female": 1,

  															}]
  														}
  													]

  												},
  												{
  													"name": "Intern",
  													"value": 5,
  													"type": "steelblue",
  													"level": "red",
  													"male": 0,
  													"female": 5,

  												},

  											]
  										},

  									]
  								},
  								{
  									"name": "Technology",
  									"value": 32,
  									"type": "black",
  									"level": "red",
  									"male": 26,
  									"female": 6,
  									"children": [{
  											"name": "Top Management",
  											"value": 6,
  											"type": "grey",
  											"level": "red",
  											"male": 6,
  											"female": 0,
  											"children": [{
  													"name": "Engineering Manager",
  													"value": 1,
  													"type": "grey",
  													"level": "red",
  													"male": 1,
  													"female": 0,

  												},
  												{
  													"name": "Product Manager",
  													"value": 1,
  													"type": "grey",
  													"level": "red",
  													"male": 1,
  													"female": 0,

  												},

  											]
  										},
  										{
  											"name": "Junior Level",
  											"value": 21,
  											"type": "grey",
  											"level": "red",
  											"male": 16,
  											"female": 5,
  											"children": [{
  													"name": "System Administrator",
  													"value": 1,
  													"type": "grey",
  													"level": "red",
  													"male": 1,
  													"female": 0,

  												},
  												{
  													"name": "Support Engineer",
  													"value": 1,
  													"type": "grey",
  													"level": "red",
  													"male": 1,
  													"female": 0,
  													"children": [{
  															"name": "Operation",
  															"value": 40,
  															"type": "black",
  															"level": "green",
  															"male": 23,
  															"female": 17,

  															"children": [{
  																	"name": "Top Management",
  																	"value": 3,
  																	"type": "grey",
  																	"level": "red",
  																	"male": 3,
  																	"female": 0,

  																	"children": [{
  																			"name": "Operation Manager",
  																			"value": 1,
  																			"type": "steelblue",
  																			"level": "orange",
  																			"male": 1,
  																			"female": 0,

  																		},
  																		{
  																			"name": "Account Strategist",
  																			"value": 1,
  																			"type": "steelblue",
  																			"level": "red",
  																			"male": 1,
  																			"female": 0,

  																		},

  																	]
  																},
  																{
  																	"name": "Junior Level",
  																	"value": 23,
  																	"type": "grey",
  																	"level": "green",
  																	"male": 10,
  																	"female": 13,

  																	"children": [{
  																			"name": "Analyst",
  																			"value": 10,
  																			"type": "steelblue",
  																			"level": "orange",
  																			"male": 7,
  																			"female": 3,

  																			"children": [{
  																					"name": "Top Management",
  																					"value": 2,
  																					"type": "black",
  																					"level": "red",
  																					"male": 2,
  																					"female": 0,

  																					"children": [{
  																							"name": "Director",
  																							"value": 1,
  																							"type": "black",
  																							"level": "red",
  																							"male": 1,
  																							"female": 0,

  																						},
  																						{
  																							"name": "HR Manager",
  																							"value": 1,
  																							"type": "black",
  																							"level": "red",
  																							"male": 1,
  																							"female": 0,

  																						}
  																					]
  																				},
  																				{
  																					"name": "Middle Management",
  																					"value": 1,
  																					"type": "black",
  																					"level": "red",
  																					"male": 0,
  																					"female": 1,
  																					"children": [{
  																						"name": "Front Office Executive",
  																						"value": 1,
  																						"type": "black",
  																						"level": "red",
  																						"male": 0,
  																						"female": 1,

  																					}]
  																				}
  																			]

  																		},
  																		{
  																			"name": "Intern",
  																			"value": 5,
  																			"type": "steelblue",
  																			"level": "red",
  																			"male": 0,
  																			"female": 5,

  																		},

  																	]
  																},

  															]
  														},
  														{
  															"name": "Technology",
  															"value": 32,
  															"type": "black",
  															"level": "red",
  															"male": 26,
  															"female": 6,
  															"children": [{
  																	"name": "Top Management",
  																	"value": 6,
  																	"type": "grey",
  																	"level": "red",
  																	"male": 6,
  																	"female": 0,
  																	"children": [{
  																			"name": "Engineering Manager",
  																			"value": 1,
  																			"type": "grey",
  																			"level": "red",
  																			"male": 1,
  																			"female": 0,

  																		},
  																		{
  																			"name": "Product Manager",
  																			"value": 1,
  																			"type": "grey",
  																			"level": "red",
  																			"male": 1,
  																			"female": 0,

  																		},

  																	]
  																},
  																{
  																	"name": "Junior Level",
  																	"value": 21,
  																	"type": "grey",
  																	"level": "red",
  																	"male": 16,
  																	"female": 5,
  																	"children": [{
  																			"name": "System Administrator",
  																			"value": 1,
  																			"type": "grey",
  																			"level": "red",
  																			"male": 1,
  																			"female": 0,

  																		},
  																		{
  																			"name": "Support Engineer",
  																			"value": 1,
  																			"type": "grey",
  																			"level": "red",
  																			"male": 1,
  																			"female": 0,

  																		},

  																	]
  																},

  															]
  														},

  													]
  												},

  											]
  										},

  									]
  								},

  							]

  						},
  						{
  							"name": "Support Engineer",
  							"value": 1,
  							"type": "grey",
  							"level": "red",
  							"male": 1,
  							"female": 0,
  							"children": [{
  									"name": "Operation",
  									"value": 40,
  									"type": "black",
  									"level": "green",
  									"male": 23,
  									"female": 17,

  									"children": [{
  											"name": "Top Management",
  											"value": 3,
  											"type": "grey",
  											"level": "red",
  											"male": 3,
  											"female": 0,

  											"children": [{
  													"name": "Operation Manager",
  													"value": 1,
  													"type": "steelblue",
  													"level": "orange",
  													"male": 1,
  													"female": 0,

  												},
  												{
  													"name": "Account Strategist",
  													"value": 1,
  													"type": "steelblue",
  													"level": "red",
  													"male": 1,
  													"female": 0,

  												},

  											]
  										},
  										{
  											"name": "Junior Level",
  											"value": 23,
  											"type": "grey",
  											"level": "green",
  											"male": 10,
  											"female": 13,

  											"children": [{
  													"name": "Analyst",
  													"value": 10,
  													"type": "steelblue",
  													"level": "orange",
  													"male": 7,
  													"female": 3,

  													"children": [{
  															"name": "Top Management",
  															"value": 2,
  															"type": "black",
  															"level": "red",
  															"male": 2,
  															"female": 0,

  															"children": [{
  																	"name": "Director",
  																	"value": 1,
  																	"type": "black",
  																	"level": "red",
  																	"male": 1,
  																	"female": 0,

  																},
  																{
  																	"name": "HR Manager",
  																	"value": 1,
  																	"type": "black",
  																	"level": "red",
  																	"male": 1,
  																	"female": 0,

  																}
  															]
  														},
  														{
  															"name": "Middle Management",
  															"value": 1,
  															"type": "black",
  															"level": "red",
  															"male": 0,
  															"female": 1,
  															"children": [{
  																"name": "Front Office Executive",
  																"value": 1,
  																"type": "black",
  																"level": "red",
  																"male": 0,
  																"female": 1,
  																"children": [{
  																		"name": "Operation",
  																		"value": 40,
  																		"type": "black",
  																		"level": "green",
  																		"male": 23,
  																		"female": 17,

  																		"children": [{
  																				"name": "Top Management",
  																				"value": 3,
  																				"type": "grey",
  																				"level": "red",
  																				"male": 3,
  																				"female": 0,

  																				"children": [{
  																						"name": "Operation Manager",
  																						"value": 1,
  																						"type": "steelblue",
  																						"level": "orange",
  																						"male": 1,
  																						"female": 0,

  																					},
  																					{
  																						"name": "Account Strategist",
  																						"value": 1,
  																						"type": "steelblue",
  																						"level": "red",
  																						"male": 1,
  																						"female": 0,

  																					},

  																				]
  																			},
  																			{
  																				"name": "Junior Level",
  																				"value": 23,
  																				"type": "grey",
  																				"level": "green",
  																				"male": 10,
  																				"female": 13,

  																				"children": [{
  																						"name": "Analyst",
  																						"value": 10,
  																						"type": "steelblue",
  																						"level": "orange",
  																						"male": 7,
  																						"female": 3,

  																						"children": [{
  																								"name": "Top Management",
  																								"value": 2,
  																								"type": "black",
  																								"level": "red",
  																								"male": 2,
  																								"female": 0,

  																								"children": [{
  																										"name": "Director",
  																										"value": 1,
  																										"type": "black",
  																										"level": "red",
  																										"male": 1,
  																										"female": 0,

  																									},
  																									{
  																										"name": "HR Manager",
  																										"value": 1,
  																										"type": "black",
  																										"level": "red",
  																										"male": 1,
  																										"female": 0,

  																									}
  																								]
  																							},
  																							{
  																								"name": "Middle Management",
  																								"value": 1,
  																								"type": "black",
  																								"level": "red",
  																								"male": 0,
  																								"female": 1,
  																								"children": [{
  																									"name": "Front Office Executive",
  																									"value": 1,
  																									"type": "black",
  																									"level": "red",
  																									"male": 0,
  																									"female": 1,

  																								}]
  																							}
  																						]

  																					},
  																					{
  																						"name": "Intern",
  																						"value": 5,
  																						"type": "steelblue",
  																						"level": "red",
  																						"male": 0,
  																						"female": 5,

  																					},

  																				]
  																			},

  																		]
  																	},
  																	{
  																		"name": "Technology",
  																		"value": 32,
  																		"type": "black",
  																		"level": "red",
  																		"male": 26,
  																		"female": 6,
  																		"children": [{
  																				"name": "Top Management",
  																				"value": 6,
  																				"type": "grey",
  																				"level": "red",
  																				"male": 6,
  																				"female": 0,
  																				"children": [{
  																						"name": "Engineering Manager",
  																						"value": 1,
  																						"type": "grey",
  																						"level": "red",
  																						"male": 1,
  																						"female": 0,

  																					},
  																					{
  																						"name": "Product Manager",
  																						"value": 1,
  																						"type": "grey",
  																						"level": "red",
  																						"male": 1,
  																						"female": 0,

  																					},

  																				]
  																			},
  																			{
  																				"name": "Junior Level",
  																				"value": 21,
  																				"type": "grey",
  																				"level": "red",
  																				"male": 16,
  																				"female": 5,
  																				"children": [{
  																						"name": "System Administrator",
  																						"value": 1,
  																						"type": "grey",
  																						"level": "red",
  																						"male": 1,
  																						"female": 0,

  																					},
  																					{
  																						"name": "Support Engineer",
  																						"value": 1,
  																						"type": "grey",
  																						"level": "red",
  																						"male": 1,
  																						"female": 0,

  																					},

  																				]
  																			},

  																		]
  																	},

  																]
  															}]
  														}
  													]

  												},
  												{
  													"name": "Intern",
  													"value": 5,
  													"type": "steelblue",
  													"level": "red",
  													"male": 0,
  													"female": 5,

  												},

  											]
  										},

  									]
  								},
  								{
  									"name": "Technology",
  									"value": 32,
  									"type": "black",
  									"level": "red",
  									"male": 26,
  									"female": 6,
  									"children": [{
  											"name": "Top Management",
  											"value": 6,
  											"type": "grey",
  											"level": "red",
  											"male": 6,
  											"female": 0,
  											"children": [{
  													"name": "Engineering Manager",
  													"value": 1,
  													"type": "grey",
  													"level": "red",
  													"male": 1,
  													"female": 0,

  												},
  												{
  													"name": "Product Manager",
  													"value": 1,
  													"type": "grey",
  													"level": "red",
  													"male": 1,
  													"female": 0,

  												},

  											]
  										},
  										{
  											"name": "Junior Level",
  											"value": 21,
  											"type": "grey",
  											"level": "red",
  											"male": 16,
  											"female": 5,
  											"children": [{
  													"name": "System Administrator",
  													"value": 1,
  													"type": "grey",
  													"level": "red",
  													"male": 1,
  													"female": 0,
  													"children": [{
  															"name": "Operation",
  															"value": 40,
  															"type": "black",
  															"level": "green",
  															"male": 23,
  															"female": 17,

  															"children": [{
  																	"name": "Top Management",
  																	"value": 3,
  																	"type": "grey",
  																	"level": "red",
  																	"male": 3,
  																	"female": 0,

  																	"children": [{
  																			"name": "Operation Manager",
  																			"value": 1,
  																			"type": "steelblue",
  																			"level": "orange",
  																			"male": 1,
  																			"female": 0,

  																		},
  																		{
  																			"name": "Account Strategist",
  																			"value": 1,
  																			"type": "steelblue",
  																			"level": "red",
  																			"male": 1,
  																			"female": 0,

  																		},

  																	]
  																},
  																{
  																	"name": "Junior Level",
  																	"value": 23,
  																	"type": "grey",
  																	"level": "green",
  																	"male": 10,
  																	"female": 13,

  																	"children": [{
  																			"name": "Analyst",
  																			"value": 10,
  																			"type": "steelblue",
  																			"level": "orange",
  																			"male": 7,
  																			"female": 3,

  																			"children": [{
  																					"name": "Top Management",
  																					"value": 2,
  																					"type": "black",
  																					"level": "red",
  																					"male": 2,
  																					"female": 0,

  																					"children": [{
  																							"name": "Director",
  																							"value": 1,
  																							"type": "black",
  																							"level": "red",
  																							"male": 1,
  																							"female": 0,

  																						},
  																						{
  																							"name": "HR Manager",
  																							"value": 1,
  																							"type": "black",
  																							"level": "red",
  																							"male": 1,
  																							"female": 0,

  																						}
  																					]
  																				},
  																				{
  																					"name": "Middle Management",
  																					"value": 1,
  																					"type": "black",
  																					"level": "red",
  																					"male": 0,
  																					"female": 1,
  																					"children": [{
  																						"name": "Front Office Executive",
  																						"value": 1,
  																						"type": "black",
  																						"level": "red",
  																						"male": 0,
  																						"female": 1,

  																					}]
  																				}
  																			]

  																		},
  																		{
  																			"name": "Intern",
  																			"value": 5,
  																			"type": "steelblue",
  																			"level": "red",
  																			"male": 0,
  																			"female": 5,

  																		},

  																	]
  																},

  															]
  														},
  														{
  															"name": "Technology",
  															"value": 32,
  															"type": "black",
  															"level": "red",
  															"male": 26,
  															"female": 6,
  															"children": [{
  																	"name": "Top Management",
  																	"value": 6,
  																	"type": "grey",
  																	"level": "red",
  																	"male": 6,
  																	"female": 0,
  																	"children": [{
  																			"name": "Engineering Manager",
  																			"value": 1,
  																			"type": "grey",
  																			"level": "red",
  																			"male": 1,
  																			"female": 0,

  																		},
  																		{
  																			"name": "Product Manager",
  																			"value": 1,
  																			"type": "grey",
  																			"level": "red",
  																			"male": 1,
  																			"female": 0,

  																		},

  																	]
  																},
  																{
  																	"name": "Junior Level",
  																	"value": 21,
  																	"type": "grey",
  																	"level": "red",
  																	"male": 16,
  																	"female": 5,
  																	"children": [{
  																			"name": "System Administrator",
  																			"value": 1,
  																			"type": "grey",
  																			"level": "red",
  																			"male": 1,
  																			"female": 0,

  																		},
  																		{
  																			"name": "Support Engineer",
  																			"value": 1,
  																			"type": "grey",
  																			"level": "red",
  																			"male": 1,
  																			"female": 0,
  																			"children": [{
  																					"name": "Operation",
  																					"value": 40,
  																					"type": "black",
  																					"level": "green",
  																					"male": 23,
  																					"female": 17,

  																					"children": [{
  																							"name": "Top Management",
  																							"value": 3,
  																							"type": "grey",
  																							"level": "red",
  																							"male": 3,
  																							"female": 0,

  																							"children": [{
  																									"name": "Operation Manager",
  																									"value": 1,
  																									"type": "steelblue",
  																									"level": "orange",
  																									"male": 1,
  																									"female": 0,

  																								},
  																								{
  																									"name": "Account Strategist",
  																									"value": 1,
  																									"type": "steelblue",
  																									"level": "red",
  																									"male": 1,
  																									"female": 0,

  																								},

  																							]
  																						},
  																						{
  																							"name": "Junior Level",
  																							"value": 23,
  																							"type": "grey",
  																							"level": "green",
  																							"male": 10,
  																							"female": 13,

  																							"children": [{
  																									"name": "Analyst",
  																									"value": 10,
  																									"type": "steelblue",
  																									"level": "orange",
  																									"male": 7,
  																									"female": 3,

  																									"children": [{
  																											"name": "Top Management",
  																											"value": 2,
  																											"type": "black",
  																											"level": "red",
  																											"male": 2,
  																											"female": 0,

  																											"children": [{
  																													"name": "Director",
  																													"value": 1,
  																													"type": "black",
  																													"level": "red",
  																													"male": 1,
  																													"female": 0,

  																												},
  																												{
  																													"name": "HR Manager",
  																													"value": 1,
  																													"type": "black",
  																													"level": "red",
  																													"male": 1,
  																													"female": 0,

  																												}
  																											]
  																										},
  																										{
  																											"name": "Middle Management",
  																											"value": 1,
  																											"type": "black",
  																											"level": "red",
  																											"male": 0,
  																											"female": 1,
  																											"children": [{
  																												"name": "Front Office Executive",
  																												"value": 1,
  																												"type": "black",
  																												"level": "red",
  																												"male": 0,
  																												"female": 1,

  																											}]
  																										}
  																									]

  																								},
  																								{
  																									"name": "Intern",
  																									"value": 5,
  																									"type": "steelblue",
  																									"level": "red",
  																									"male": 0,
  																									"female": 5,

  																								},

  																							]
  																						},

  																					]
  																				},
  																				{
  																					"name": "Technology",
  																					"value": 32,
  																					"type": "black",
  																					"level": "red",
  																					"male": 26,
  																					"female": 6,
  																					"children": [{
  																							"name": "Top Management",
  																							"value": 6,
  																							"type": "grey",
  																							"level": "red",
  																							"male": 6,
  																							"female": 0,
  																							"children": [{
  																									"name": "Engineering Manager",
  																									"value": 1,
  																									"type": "grey",
  																									"level": "red",
  																									"male": 1,
  																									"female": 0,

  																								},
  																								{
  																									"name": "Product Manager",
  																									"value": 1,
  																									"type": "grey",
  																									"level": "red",
  																									"male": 1,
  																									"female": 0,

  																								},

  																							]
  																						},
  																						{
  																							"name": "Junior Level",
  																							"value": 21,
  																							"type": "grey",
  																							"level": "red",
  																							"male": 16,
  																							"female": 5,
  																							"children": [{
  																									"name": "System Administrator",
  																									"value": 1,
  																									"type": "grey",
  																									"level": "red",
  																									"male": 1,
  																									"female": 0,

  																								},
  																								{
  																									"name": "Support Engineer",
  																									"value": 1,
  																									"type": "grey",
  																									"level": "red",
  																									"male": 1,
  																									"female": 0,

  																								},

  																							]
  																						},

  																					]
  																				},

  																			]
  																		},

  																	]
  																},

  															]
  														},

  													]

  												},
  												{
  													"name": "Support Engineer",
  													"value": 1,
  													"type": "grey",
  													"level": "red",
  													"male": 1,
  													"female": 0,
  													"children": [{
  															"name": "Operation",
  															"value": 40,
  															"type": "black",
  															"level": "green",
  															"male": 23,
  															"female": 17,

  															"children": [{
  																	"name": "Top Management",
  																	"value": 3,
  																	"type": "grey",
  																	"level": "red",
  																	"male": 3,
  																	"female": 0,

  																	"children": [{
  																			"name": "Operation Manager",
  																			"value": 1,
  																			"type": "steelblue",
  																			"level": "orange",
  																			"male": 1,
  																			"female": 0,

  																		},
  																		{
  																			"name": "Account Strategist",
  																			"value": 1,
  																			"type": "steelblue",
  																			"level": "red",
  																			"male": 1,
  																			"female": 0,

  																		},

  																	]
  																},
  																{
  																	"name": "Junior Level",
  																	"value": 23,
  																	"type": "grey",
  																	"level": "green",
  																	"male": 10,
  																	"female": 13,

  																	"children": [{
  																			"name": "Analyst",
  																			"value": 10,
  																			"type": "steelblue",
  																			"level": "orange",
  																			"male": 7,
  																			"female": 3,

  																			"children": [{
  																					"name": "Top Management",
  																					"value": 2,
  																					"type": "black",
  																					"level": "red",
  																					"male": 2,
  																					"female": 0,

  																					"children": [{
  																							"name": "Director",
  																							"value": 1,
  																							"type": "black",
  																							"level": "red",
  																							"male": 1,
  																							"female": 0,

  																						},
  																						{
  																							"name": "HR Manager",
  																							"value": 1,
  																							"type": "black",
  																							"level": "red",
  																							"male": 1,
  																							"female": 0,

  																						}
  																					]
  																				},
  																				{
  																					"name": "Middle Management",
  																					"value": 1,
  																					"type": "black",
  																					"level": "red",
  																					"male": 0,
  																					"female": 1,
  																					"children": [{
  																						"name": "Front Office Executive",
  																						"value": 1,
  																						"type": "black",
  																						"level": "red",
  																						"male": 0,
  																						"female": 1,
  																						"children": [{
  																								"name": "Operation",
  																								"value": 40,
  																								"type": "black",
  																								"level": "green",
  																								"male": 23,
  																								"female": 17,

  																								"children": [{
  																										"name": "Top Management",
  																										"value": 3,
  																										"type": "grey",
  																										"level": "red",
  																										"male": 3,
  																										"female": 0,

  																										"children": [{
  																												"name": "Operation Manager",
  																												"value": 1,
  																												"type": "steelblue",
  																												"level": "orange",
  																												"male": 1,
  																												"female": 0,

  																											},
  																											{
  																												"name": "Account Strategist",
  																												"value": 1,
  																												"type": "steelblue",
  																												"level": "red",
  																												"male": 1,
  																												"female": 0,

  																											},

  																										]
  																									},
  																									{
  																										"name": "Junior Level",
  																										"value": 23,
  																										"type": "grey",
  																										"level": "green",
  																										"male": 10,
  																										"female": 13,

  																										"children": [{
  																												"name": "Analyst",
  																												"value": 10,
  																												"type": "steelblue",
  																												"level": "orange",
  																												"male": 7,
  																												"female": 3,

  																												"children": [{
  																														"name": "Top Management",
  																														"value": 2,
  																														"type": "black",
  																														"level": "red",
  																														"male": 2,
  																														"female": 0,

  																														"children": [{
  																																"name": "Director",
  																																"value": 1,
  																																"type": "black",
  																																"level": "red",
  																																"male": 1,
  																																"female": 0,

  																															},
  																															{
  																																"name": "HR Manager",
  																																"value": 1,
  																																"type": "black",
  																																"level": "red",
  																																"male": 1,
  																																"female": 0,

  																															}
  																														]
  																													},
  																													{
  																														"name": "Middle Management",
  																														"value": 1,
  																														"type": "black",
  																														"level": "red",
  																														"male": 0,
  																														"female": 1,
  																														"children": [{
  																															"name": "Front Office Executive",
  																															"value": 1,
  																															"type": "black",
  																															"level": "red",
  																															"male": 0,
  																															"female": 1,

  																														}]
  																													}
  																												]

  																											},
  																											{
  																												"name": "Intern",
  																												"value": 5,
  																												"type": "steelblue",
  																												"level": "red",
  																												"male": 0,
  																												"female": 5,

  																											},

  																										]
  																									},

  																								]
  																							},
  																							{
  																								"name": "Technology",
  																								"value": 32,
  																								"type": "black",
  																								"level": "red",
  																								"male": 26,
  																								"female": 6,
  																								"children": [{
  																										"name": "Top Management",
  																										"value": 6,
  																										"type": "grey",
  																										"level": "red",
  																										"male": 6,
  																										"female": 0,
  																										"children": [{
  																												"name": "Engineering Manager",
  																												"value": 1,
  																												"type": "grey",
  																												"level": "red",
  																												"male": 1,
  																												"female": 0,

  																											},
  																											{
  																												"name": "Product Manager",
  																												"value": 1,
  																												"type": "grey",
  																												"level": "red",
  																												"male": 1,
  																												"female": 0,

  																											},

  																										]
  																									},
  																									{
  																										"name": "Junior Level",
  																										"value": 21,
  																										"type": "grey",
  																										"level": "red",
  																										"male": 16,
  																										"female": 5,
  																										"children": [{
  																												"name": "System Administrator",
  																												"value": 1,
  																												"type": "grey",
  																												"level": "red",
  																												"male": 1,
  																												"female": 0,

  																											},
  																											{
  																												"name": "Support Engineer",
  																												"value": 1,
  																												"type": "grey",
  																												"level": "red",
  																												"male": 1,
  																												"female": 0,

  																											},

  																										]
  																									},

  																								]
  																							},

  																						]
  																					}]
  																				}
  																			]

  																		},
  																		{
  																			"name": "Intern",
  																			"value": 5,
  																			"type": "steelblue",
  																			"level": "red",
  																			"male": 0,
  																			"female": 5,

  																		},

  																	]
  																},

  															]
  														},
  														{
  															"name": "Technology",
  															"value": 32,
  															"type": "black",
  															"level": "red",
  															"male": 26,
  															"female": 6,
  															"children": [{
  																	"name": "Top Management",
  																	"value": 6,
  																	"type": "grey",
  																	"level": "red",
  																	"male": 6,
  																	"female": 0,
  																	"children": [{
  																			"name": "Engineering Manager",
  																			"value": 1,
  																			"type": "grey",
  																			"level": "red",
  																			"male": 1,
  																			"female": 0,

  																		},
  																		{
  																			"name": "Product Manager",
  																			"value": 1,
  																			"type": "grey",
  																			"level": "red",
  																			"male": 1,
  																			"female": 0,

  																		},

  																	]
  																},
  																{
  																	"name": "Junior Level",
  																	"value": 21,
  																	"type": "grey",
  																	"level": "red",
  																	"male": 16,
  																	"female": 5,
  																	"children": [{
  																			"name": "System Administrator",
  																			"value": 1,
  																			"type": "grey",
  																			"level": "red",
  																			"male": 1,
  																			"female": 0,
  																			"children": [{
  																					"name": "Operation",
  																					"value": 40,
  																					"type": "black",
  																					"level": "green",
  																					"male": 23,
  																					"female": 17,

  																					"children": [{
  																							"name": "Top Management",
  																							"value": 3,
  																							"type": "grey",
  																							"level": "red",
  																							"male": 3,
  																							"female": 0,

  																							"children": [{
  																									"name": "Operation Manager",
  																									"value": 1,
  																									"type": "steelblue",
  																									"level": "orange",
  																									"male": 1,
  																									"female": 0,

  																								},
  																								{
  																									"name": "Account Strategist",
  																									"value": 1,
  																									"type": "steelblue",
  																									"level": "red",
  																									"male": 1,
  																									"female": 0,

  																								},

  																							]
  																						},
  																						{
  																							"name": "Junior Level",
  																							"value": 23,
  																							"type": "grey",
  																							"level": "green",
  																							"male": 10,
  																							"female": 13,

  																							"children": [{
  																									"name": "Analyst",
  																									"value": 10,
  																									"type": "steelblue",
  																									"level": "orange",
  																									"male": 7,
  																									"female": 3,

  																									"children": [{
  																											"name": "Top Management",
  																											"value": 2,
  																											"type": "black",
  																											"level": "red",
  																											"male": 2,
  																											"female": 0,

  																											"children": [{
  																													"name": "Director",
  																													"value": 1,
  																													"type": "black",
  																													"level": "red",
  																													"male": 1,
  																													"female": 0,

  																												},
  																												{
  																													"name": "HR Manager",
  																													"value": 1,
  																													"type": "black",
  																													"level": "red",
  																													"male": 1,
  																													"female": 0,

  																												}
  																											]
  																										},
  																										{
  																											"name": "Middle Management",
  																											"value": 1,
  																											"type": "black",
  																											"level": "red",
  																											"male": 0,
  																											"female": 1,
  																											"children": [{
  																												"name": "Front Office Executive",
  																												"value": 1,
  																												"type": "black",
  																												"level": "red",
  																												"male": 0,
  																												"female": 1,

  																											}]
  																										}
  																									]

  																								},
  																								{
  																									"name": "Intern",
  																									"value": 5,
  																									"type": "steelblue",
  																									"level": "red",
  																									"male": 0,
  																									"female": 5,

  																								},

  																							]
  																						},

  																					]
  																				},
  																				{
  																					"name": "Technology",
  																					"value": 32,
  																					"type": "black",
  																					"level": "red",
  																					"male": 26,
  																					"female": 6,
  																					"children": [{
  																							"name": "Top Management",
  																							"value": 6,
  																							"type": "grey",
  																							"level": "red",
  																							"male": 6,
  																							"female": 0,
  																							"children": [{
  																									"name": "Engineering Manager",
  																									"value": 1,
  																									"type": "grey",
  																									"level": "red",
  																									"male": 1,
  																									"female": 0,

  																								},
  																								{
  																									"name": "Product Manager",
  																									"value": 1,
  																									"type": "grey",
  																									"level": "red",
  																									"male": 1,
  																									"female": 0,

  																								},

  																							]
  																						},
  																						{
  																							"name": "Junior Level",
  																							"value": 21,
  																							"type": "grey",
  																							"level": "red",
  																							"male": 16,
  																							"female": 5,
  																							"children": [{
  																									"name": "System Administrator",
  																									"value": 1,
  																									"type": "grey",
  																									"level": "red",
  																									"male": 1,
  																									"female": 0,

  																								},
  																								{
  																									"name": "Support Engineer",
  																									"value": 1,
  																									"type": "grey",
  																									"level": "red",
  																									"male": 1,
  																									"female": 0,
  																									"children": [{
  																											"name": "Operation",
  																											"value": 40,
  																											"type": "black",
  																											"level": "green",
  																											"male": 23,
  																											"female": 17,

  																											"children": [{
  																													"name": "Top Management",
  																													"value": 3,
  																													"type": "grey",
  																													"level": "red",
  																													"male": 3,
  																													"female": 0,

  																													"children": [{
  																															"name": "Operation Manager",
  																															"value": 1,
  																															"type": "steelblue",
  																															"level": "orange",
  																															"male": 1,
  																															"female": 0,

  																														},
  																														{
  																															"name": "Account Strategist",
  																															"value": 1,
  																															"type": "steelblue",
  																															"level": "red",
  																															"male": 1,
  																															"female": 0,

  																														},

  																													]
  																												},
  																												{
  																													"name": "Junior Level",
  																													"value": 23,
  																													"type": "grey",
  																													"level": "green",
  																													"male": 10,
  																													"female": 13,

  																													"children": [{
  																															"name": "Analyst",
  																															"value": 10,
  																															"type": "steelblue",
  																															"level": "orange",
  																															"male": 7,
  																															"female": 3,

  																															"children": [{
  																																	"name": "Top Management",
  																																	"value": 2,
  																																	"type": "black",
  																																	"level": "red",
  																																	"male": 2,
  																																	"female": 0,

  																																	"children": [{
  																																			"name": "Director",
  																																			"value": 1,
  																																			"type": "black",
  																																			"level": "red",
  																																			"male": 1,
  																																			"female": 0,

  																																		},
  																																		{
  																																			"name": "HR Manager",
  																																			"value": 1,
  																																			"type": "black",
  																																			"level": "red",
  																																			"male": 1,
  																																			"female": 0,

  																																		}
  																																	]
  																																},
  																																{
  																																	"name": "Middle Management",
  																																	"value": 1,
  																																	"type": "black",
  																																	"level": "red",
  																																	"male": 0,
  																																	"female": 1,
  																																	"children": [{
  																																		"name": "Front Office Executive",
  																																		"value": 1,
  																																		"type": "black",
  																																		"level": "red",
  																																		"male": 0,
  																																		"female": 1,

  																																	}]
  																																}
  																															]

  																														},
  																														{
  																															"name": "Intern",
  																															"value": 5,
  																															"type": "steelblue",
  																															"level": "red",
  																															"male": 0,
  																															"female": 5,

  																														},

  																													]
  																												},

  																											]
  																										},
  																										{
  																											"name": "Technology",
  																											"value": 32,
  																											"type": "black",
  																											"level": "red",
  																											"male": 26,
  																											"female": 6,
  																											"children": [{
  																													"name": "Top Management",
  																													"value": 6,
  																													"type": "grey",
  																													"level": "red",
  																													"male": 6,
  																													"female": 0,
  																													"children": [{
  																															"name": "Engineering Manager",
  																															"value": 1,
  																															"type": "grey",
  																															"level": "red",
  																															"male": 1,
  																															"female": 0,

  																														},
  																														{
  																															"name": "Product Manager",
  																															"value": 1,
  																															"type": "grey",
  																															"level": "red",
  																															"male": 1,
  																															"female": 0,

  																														},

  																													]
  																												},
  																												{
  																													"name": "Junior Level",
  																													"value": 21,
  																													"type": "grey",
  																													"level": "red",
  																													"male": 16,
  																													"female": 5,
  																													"children": [{
  																															"name": "System Administrator",
  																															"value": 1,
  																															"type": "grey",
  																															"level": "red",
  																															"male": 1,
  																															"female": 0,

  																														},
  																														{
  																															"name": "Support Engineer",
  																															"value": 1,
  																															"type": "grey",
  																															"level": "red",
  																															"male": 1,
  																															"female": 0,

  																														},

  																													]
  																												},

  																											]
  																										},

  																									]
  																								},

  																							]
  																						},

  																					]
  																				},

  																			]

  																		},
  																		{
  																			"name": "Support Engineer",
  																			"value": 1,
  																			"type": "grey",
  																			"level": "red",
  																			"male": 1,
  																			"female": 0,
  																			"children": [{
  																					"name": "Operation",
  																					"value": 40,
  																					"type": "black",
  																					"level": "green",
  																					"male": 23,
  																					"female": 17,

  																					"children": [{
  																							"name": "Top Management",
  																							"value": 3,
  																							"type": "grey",
  																							"level": "red",
  																							"male": 3,
  																							"female": 0,

  																							"children": [{
  																									"name": "Operation Manager",
  																									"value": 1,
  																									"type": "steelblue",
  																									"level": "orange",
  																									"male": 1,
  																									"female": 0,

  																								},
  																								{
  																									"name": "Account Strategist",
  																									"value": 1,
  																									"type": "steelblue",
  																									"level": "red",
  																									"male": 1,
  																									"female": 0,

  																								},

  																							]
  																						},
  																						{
  																							"name": "Junior Level",
  																							"value": 23,
  																							"type": "grey",
  																							"level": "green",
  																							"male": 10,
  																							"female": 13,

  																							"children": [{
  																									"name": "Analyst",
  																									"value": 10,
  																									"type": "steelblue",
  																									"level": "orange",
  																									"male": 7,
  																									"female": 3,

  																									"children": [{
  																											"name": "Top Management",
  																											"value": 2,
  																											"type": "black",
  																											"level": "red",
  																											"male": 2,
  																											"female": 0,

  																											"children": [{
  																													"name": "Director",
  																													"value": 1,
  																													"type": "black",
  																													"level": "red",
  																													"male": 1,
  																													"female": 0,

  																												},
  																												{
  																													"name": "HR Manager",
  																													"value": 1,
  																													"type": "black",
  																													"level": "red",
  																													"male": 1,
  																													"female": 0,

  																												}
  																											]
  																										},
  																										{
  																											"name": "Middle Management",
  																											"value": 1,
  																											"type": "black",
  																											"level": "red",
  																											"male": 0,
  																											"female": 1,
  																											"children": [{
  																												"name": "Front Office Executive",
  																												"value": 1,
  																												"type": "black",
  																												"level": "red",
  																												"male": 0,
  																												"female": 1,
  																												"children": [{
  																														"name": "Operation",
  																														"value": 40,
  																														"type": "black",
  																														"level": "green",
  																														"male": 23,
  																														"female": 17,

  																														"children": [{
  																																"name": "Top Management",
  																																"value": 3,
  																																"type": "grey",
  																																"level": "red",
  																																"male": 3,
  																																"female": 0,

  																																"children": [{
  																																		"name": "Operation Manager",
  																																		"value": 1,
  																																		"type": "steelblue",
  																																		"level": "orange",
  																																		"male": 1,
  																																		"female": 0,

  																																	},
  																																	{
  																																		"name": "Account Strategist",
  																																		"value": 1,
  																																		"type": "steelblue",
  																																		"level": "red",
  																																		"male": 1,
  																																		"female": 0,

  																																	},

  																																]
  																															},
  																															{
  																																"name": "Junior Level",
  																																"value": 23,
  																																"type": "grey",
  																																"level": "green",
  																																"male": 10,
  																																"female": 13,

  																																"children": [{
  																																		"name": "Analyst",
  																																		"value": 10,
  																																		"type": "steelblue",
  																																		"level": "orange",
  																																		"male": 7,
  																																		"female": 3,

  																																		"children": [{
  																																				"name": "Top Management",
  																																				"value": 2,
  																																				"type": "black",
  																																				"level": "red",
  																																				"male": 2,
  																																				"female": 0,

  																																				"children": [{
  																																						"name": "Director",
  																																						"value": 1,
  																																						"type": "black",
  																																						"level": "red",
  																																						"male": 1,
  																																						"female": 0,

  																																					},
  																																					{
  																																						"name": "HR Manager",
  																																						"value": 1,
  																																						"type": "black",
  																																						"level": "red",
  																																						"male": 1,
  																																						"female": 0,

  																																					}
  																																				]
  																																			},
  																																			{
  																																				"name": "Middle Management",
  																																				"value": 1,
  																																				"type": "black",
  																																				"level": "red",
  																																				"male": 0,
  																																				"female": 1,
  																																				"children": [{
  																																					"name": "Front Office Executive",
  																																					"value": 1,
  																																					"type": "black",
  																																					"level": "red",
  																																					"male": 0,
  																																					"female": 1,

  																																				}]
  																																			}
  																																		]

  																																	},
  																																	{
  																																		"name": "Intern",
  																																		"value": 5,
  																																		"type": "steelblue",
  																																		"level": "red",
  																																		"male": 0,
  																																		"female": 5,

  																																	},

  																																]
  																															},

  																														]
  																													},
  																													{
  																														"name": "Technology",
  																														"value": 32,
  																														"type": "black",
  																														"level": "red",
  																														"male": 26,
  																														"female": 6,
  																														"children": [{
  																																"name": "Top Management",
  																																"value": 6,
  																																"type": "grey",
  																																"level": "red",
  																																"male": 6,
  																																"female": 0,
  																																"children": [{
  																																		"name": "Engineering Manager",
  																																		"value": 1,
  																																		"type": "grey",
  																																		"level": "red",
  																																		"male": 1,
  																																		"female": 0,

  																																	},
  																																	{
  																																		"name": "Product Manager",
  																																		"value": 1,
  																																		"type": "grey",
  																																		"level": "red",
  																																		"male": 1,
  																																		"female": 0,

  																																	},

  																																]
  																															},
  																															{
  																																"name": "Junior Level",
  																																"value": 21,
  																																"type": "grey",
  																																"level": "red",
  																																"male": 16,
  																																"female": 5,
  																																"children": [{
  																																		"name": "System Administrator",
  																																		"value": 1,
  																																		"type": "grey",
  																																		"level": "red",
  																																		"male": 1,
  																																		"female": 0,

  																																	},
  																																	{
  																																		"name": "Support Engineer",
  																																		"value": 1,
  																																		"type": "grey",
  																																		"level": "red",
  																																		"male": 1,
  																																		"female": 0,

  																																	},

  																																]
  																															},

  																														]
  																													},

  																												]
  																											}]
  																										}
  																									]

  																								},
  																								{
  																									"name": "Intern",
  																									"value": 5,
  																									"type": "steelblue",
  																									"level": "red",
  																									"male": 0,
  																									"female": 5,

  																								},

  																							]
  																						},

  																					]
  																				},
  																				{
  																					"name": "Technology",
  																					"value": 32,
  																					"type": "black",
  																					"level": "red",
  																					"male": 26,
  																					"female": 6,
  																					"children": [{
  																							"name": "Top Management",
  																							"value": 6,
  																							"type": "grey",
  																							"level": "red",
  																							"male": 6,
  																							"female": 0,
  																							"children": [{
  																									"name": "Engineering Manager",
  																									"value": 1,
  																									"type": "grey",
  																									"level": "red",
  																									"male": 1,
  																									"female": 0,

  																								},
  																								{
  																									"name": "Product Manager",
  																									"value": 1,
  																									"type": "grey",
  																									"level": "red",
  																									"male": 1,
  																									"female": 0,

  																								},

  																							]
  																						},
  																						{
  																							"name": "Junior Level",
  																							"value": 21,
  																							"type": "grey",
  																							"level": "red",
  																							"male": 16,
  																							"female": 5,
  																							"children": [{
  																									"name": "System Administrator",
  																									"value": 1,
  																									"type": "grey",
  																									"level": "red",
  																									"male": 1,
  																									"female": 0,
  																									"children": [{
  																											"name": "Operation",
  																											"value": 40,
  																											"type": "black",
  																											"level": "green",
  																											"male": 23,
  																											"female": 17,

  																											"children": [{
  																													"name": "Top Management",
  																													"value": 3,
  																													"type": "grey",
  																													"level": "red",
  																													"male": 3,
  																													"female": 0,

  																													"children": [{
  																															"name": "Operation Manager",
  																															"value": 1,
  																															"type": "steelblue",
  																															"level": "orange",
  																															"male": 1,
  																															"female": 0,

  																														},
  																														{
  																															"name": "Account Strategist",
  																															"value": 1,
  																															"type": "steelblue",
  																															"level": "red",
  																															"male": 1,
  																															"female": 0,

  																														},

  																													]
  																												},
  																												{
  																													"name": "Junior Level",
  																													"value": 23,
  																													"type": "grey",
  																													"level": "green",
  																													"male": 10,
  																													"female": 13,

  																													"children": [{
  																															"name": "Analyst",
  																															"value": 10,
  																															"type": "steelblue",
  																															"level": "orange",
  																															"male": 7,
  																															"female": 3,

  																															"children": [{
  																																	"name": "Top Management",
  																																	"value": 2,
  																																	"type": "black",
  																																	"level": "red",
  																																	"male": 2,
  																																	"female": 0,

  																																	"children": [{
  																																			"name": "Director",
  																																			"value": 1,
  																																			"type": "black",
  																																			"level": "red",
  																																			"male": 1,
  																																			"female": 0,

  																																		},
  																																		{
  																																			"name": "HR Manager",
  																																			"value": 1,
  																																			"type": "black",
  																																			"level": "red",
  																																			"male": 1,
  																																			"female": 0,

  																																		}
  																																	]
  																																},
  																																{
  																																	"name": "Middle Management",
  																																	"value": 1,
  																																	"type": "black",
  																																	"level": "red",
  																																	"male": 0,
  																																	"female": 1,
  																																	"children": [{
  																																		"name": "Front Office Executive",
  																																		"value": 1,
  																																		"type": "black",
  																																		"level": "red",
  																																		"male": 0,
  																																		"female": 1,

  																																	}]
  																																}
  																															]

  																														},
  																														{
  																															"name": "Intern",
  																															"value": 5,
  																															"type": "steelblue",
  																															"level": "red",
  																															"male": 0,
  																															"female": 5,

  																														},

  																													]
  																												},

  																											]
  																										},
  																										{
  																											"name": "Technology",
  																											"value": 32,
  																											"type": "black",
  																											"level": "red",
  																											"male": 26,
  																											"female": 6,
  																											"children": [{
  																													"name": "Top Management",
  																													"value": 6,
  																													"type": "grey",
  																													"level": "red",
  																													"male": 6,
  																													"female": 0,
  																													"children": [{
  																															"name": "Engineering Manager",
  																															"value": 1,
  																															"type": "grey",
  																															"level": "red",
  																															"male": 1,
  																															"female": 0,

  																														},
  																														{
  																															"name": "Product Manager",
  																															"value": 1,
  																															"type": "grey",
  																															"level": "red",
  																															"male": 1,
  																															"female": 0,

  																														},

  																													]
  																												},
  																												{
  																													"name": "Junior Level",
  																													"value": 21,
  																													"type": "grey",
  																													"level": "red",
  																													"male": 16,
  																													"female": 5,
  																													"children": [{
  																															"name": "System Administrator",
  																															"value": 1,
  																															"type": "grey",
  																															"level": "red",
  																															"male": 1,
  																															"female": 0,

  																														},
  																														{
  																															"name": "Support Engineer",
  																															"value": 1,
  																															"type": "grey",
  																															"level": "red",
  																															"male": 1,
  																															"female": 0,
  																															"children": [{
  																																	"name": "Operation",
  																																	"value": 40,
  																																	"type": "black",
  																																	"level": "green",
  																																	"male": 23,
  																																	"female": 17,

  																																	"children": [{
  																																			"name": "Top Management",
  																																			"value": 3,
  																																			"type": "grey",
  																																			"level": "red",
  																																			"male": 3,
  																																			"female": 0,

  																																			"children": [{
  																																					"name": "Operation Manager",
  																																					"value": 1,
  																																					"type": "steelblue",
  																																					"level": "orange",
  																																					"male": 1,
  																																					"female": 0,

  																																				},
  																																				{
  																																					"name": "Account Strategist",
  																																					"value": 1,
  																																					"type": "steelblue",
  																																					"level": "red",
  																																					"male": 1,
  																																					"female": 0,

  																																				},

  																																			]
  																																		},
  																																		{
  																																			"name": "Junior Level",
  																																			"value": 23,
  																																			"type": "grey",
  																																			"level": "green",
  																																			"male": 10,
  																																			"female": 13,

  																																			"children": [{
  																																					"name": "Analyst",
  																																					"value": 10,
  																																					"type": "steelblue",
  																																					"level": "orange",
  																																					"male": 7,
  																																					"female": 3,

  																																					"children": [{
  																																							"name": "Top Management",
  																																							"value": 2,
  																																							"type": "black",
  																																							"level": "red",
  																																							"male": 2,
  																																							"female": 0,

  																																							"children": [{
  																																									"name": "Director",
  																																									"value": 1,
  																																									"type": "black",
  																																									"level": "red",
  																																									"male": 1,
  																																									"female": 0,

  																																								},
  																																								{
  																																									"name": "HR Manager",
  																																									"value": 1,
  																																									"type": "black",
  																																									"level": "red",
  																																									"male": 1,
  																																									"female": 0,

  																																								}
  																																							]
  																																						},
  																																						{
  																																							"name": "Middle Management",
  																																							"value": 1,
  																																							"type": "black",
  																																							"level": "red",
  																																							"male": 0,
  																																							"female": 1,
  																																							"children": [{
  																																								"name": "Front Office Executive",
  																																								"value": 1,
  																																								"type": "black",
  																																								"level": "red",
  																																								"male": 0,
  																																								"female": 1,

  																																							}]
  																																						}
  																																					]

  																																				},
  																																				{
  																																					"name": "Intern",
  																																					"value": 5,
  																																					"type": "steelblue",
  																																					"level": "red",
  																																					"male": 0,
  																																					"female": 5,

  																																				},

  																																			]
  																																		},

  																																	]
  																																},
  																																{
  																																	"name": "Technology",
  																																	"value": 32,
  																																	"type": "black",
  																																	"level": "red",
  																																	"male": 26,
  																																	"female": 6,
  																																	"children": [{
  																																			"name": "Top Management",
  																																			"value": 6,
  																																			"type": "grey",
  																																			"level": "red",
  																																			"male": 6,
  																																			"female": 0,
  																																			"children": [{
  																																					"name": "Engineering Manager",
  																																					"value": 1,
  																																					"type": "grey",
  																																					"level": "red",
  																																					"male": 1,
  																																					"female": 0,

  																																				},
  																																				{
  																																					"name": "Product Manager",
  																																					"value": 1,
  																																					"type": "grey",
  																																					"level": "red",
  																																					"male": 1,
  																																					"female": 0,

  																																				},

  																																			]
  																																		},
  																																		{
  																																			"name": "Junior Level",
  																																			"value": 21,
  																																			"type": "grey",
  																																			"level": "red",
  																																			"male": 16,
  																																			"female": 5,
  																																			"children": [{
  																																					"name": "System Administrator",
  																																					"value": 1,
  																																					"type": "grey",
  																																					"level": "red",
  																																					"male": 1,
  																																					"female": 0,

  																																				},
  																																				{
  																																					"name": "Support Engineer",
  																																					"value": 1,
  																																					"type": "grey",
  																																					"level": "red",
  																																					"male": 1,
  																																					"female": 0,

  																																				},

  																																			]
  																																		},

  																																	]
  																																},

  																															]
  																														},

  																													]
  																												},

  																											]
  																										},

  																									]

  																								},
  																								{
  																									"name": "Support Engineer",
  																									"value": 1,
  																									"type": "grey",
  																									"level": "red",
  																									"male": 1,
  																									"female": 0,
  																									"children": [{
  																											"name": "Operation",
  																											"value": 40,
  																											"type": "black",
  																											"level": "green",
  																											"male": 23,
  																											"female": 17,

  																											"children": [{
  																													"name": "Top Management",
  																													"value": 3,
  																													"type": "grey",
  																													"level": "red",
  																													"male": 3,
  																													"female": 0,

  																													"children": [{
  																															"name": "Operation Manager",
  																															"value": 1,
  																															"type": "steelblue",
  																															"level": "orange",
  																															"male": 1,
  																															"female": 0,

  																														},
  																														{
  																															"name": "Account Strategist",
  																															"value": 1,
  																															"type": "steelblue",
  																															"level": "red",
  																															"male": 1,
  																															"female": 0,

  																														},

  																													]
  																												},
  																												{
  																													"name": "Junior Level",
  																													"value": 23,
  																													"type": "grey",
  																													"level": "green",
  																													"male": 10,
  																													"female": 13,

  																													"children": [{
  																															"name": "Analyst",
  																															"value": 10,
  																															"type": "steelblue",
  																															"level": "orange",
  																															"male": 7,
  																															"female": 3,

  																															"children": [{
  																																	"name": "Top Management",
  																																	"value": 2,
  																																	"type": "black",
  																																	"level": "red",
  																																	"male": 2,
  																																	"female": 0,

  																																	"children": [{
  																																			"name": "Director",
  																																			"value": 1,
  																																			"type": "black",
  																																			"level": "red",
  																																			"male": 1,
  																																			"female": 0,

  																																		},
  																																		{
  																																			"name": "HR Manager",
  																																			"value": 1,
  																																			"type": "black",
  																																			"level": "red",
  																																			"male": 1,
  																																			"female": 0,

  																																		}
  																																	]
  																																},
  																																{
  																																	"name": "Middle Management",
  																																	"value": 1,
  																																	"type": "black",
  																																	"level": "red",
  																																	"male": 0,
  																																	"female": 1,
  																																	"children": [{
  																																		"name": "Front Office Executive",
  																																		"value": 1,
  																																		"type": "black",
  																																		"level": "red",
  																																		"male": 0,
  																																		"female": 1,
  																																		"children": [{
  																																				"name": "Operation",
  																																				"value": 40,
  																																				"type": "black",
  																																				"level": "green",
  																																				"male": 23,
  																																				"female": 17,

  																																				"children": [{
  																																						"name": "Top Management",
  																																						"value": 3,
  																																						"type": "grey",
  																																						"level": "red",
  																																						"male": 3,
  																																						"female": 0,

  																																						"children": [{
  																																								"name": "Operation Manager",
  																																								"value": 1,
  																																								"type": "steelblue",
  																																								"level": "orange",
  																																								"male": 1,
  																																								"female": 0,

  																																							},
  																																							{
  																																								"name": "Account Strategist",
  																																								"value": 1,
  																																								"type": "steelblue",
  																																								"level": "red",
  																																								"male": 1,
  																																								"female": 0,

  																																							},

  																																						]
  																																					},
  																																					{
  																																						"name": "Junior Level",
  																																						"value": 23,
  																																						"type": "grey",
  																																						"level": "green",
  																																						"male": 10,
  																																						"female": 13,

  																																						"children": [{
  																																								"name": "Analyst",
  																																								"value": 10,
  																																								"type": "steelblue",
  																																								"level": "orange",
  																																								"male": 7,
  																																								"female": 3,

  																																								"children": [{
  																																										"name": "Top Management",
  																																										"value": 2,
  																																										"type": "black",
  																																										"level": "red",
  																																										"male": 2,
  																																										"female": 0,

  																																										"children": [{
  																																												"name": "Director",
  																																												"value": 1,
  																																												"type": "black",
  																																												"level": "red",
  																																												"male": 1,
  																																												"female": 0,

  																																											},
  																																											{
  																																												"name": "HR Manager",
  																																												"value": 1,
  																																												"type": "black",
  																																												"level": "red",
  																																												"male": 1,
  																																												"female": 0,

  																																											}
  																																										]
  																																									},
  																																									{
  																																										"name": "Middle Management",
  																																										"value": 1,
  																																										"type": "black",
  																																										"level": "red",
  																																										"male": 0,
  																																										"female": 1,
  																																										"children": [{
  																																											"name": "Front Office Executive",
  																																											"value": 1,
  																																											"type": "black",
  																																											"level": "red",
  																																											"male": 0,
  																																											"female": 1,

  																																										}]
  																																									}
  																																								]

  																																							},
  																																							{
  																																								"name": "Intern",
  																																								"value": 5,
  																																								"type": "steelblue",
  																																								"level": "red",
  																																								"male": 0,
  																																								"female": 5,

  																																							},

  																																						]
  																																					},

  																																				]
  																																			},
  																																			{
  																																				"name": "Technology",
  																																				"value": 32,
  																																				"type": "black",
  																																				"level": "red",
  																																				"male": 26,
  																																				"female": 6,
  																																				"children": [{
  																																						"name": "Top Management",
  																																						"value": 6,
  																																						"type": "grey",
  																																						"level": "red",
  																																						"male": 6,
  																																						"female": 0,
  																																						"children": [{
  																																								"name": "Engineering Manager",
  																																								"value": 1,
  																																								"type": "grey",
  																																								"level": "red",
  																																								"male": 1,
  																																								"female": 0,

  																																							},
  																																							{
  																																								"name": "Product Manager",
  																																								"value": 1,
  																																								"type": "grey",
  																																								"level": "red",
  																																								"male": 1,
  																																								"female": 0,

  																																							},

  																																						]
  																																					},
  																																					{
  																																						"name": "Junior Level",
  																																						"value": 21,
  																																						"type": "grey",
  																																						"level": "red",
  																																						"male": 16,
  																																						"female": 5,
  																																						"children": [{
  																																								"name": "System Administrator",
  																																								"value": 1,
  																																								"type": "grey",
  																																								"level": "red",
  																																								"male": 1,
  																																								"female": 0,

  																																							},
  																																							{
  																																								"name": "Support Engineer",
  																																								"value": 1,
  																																								"type": "grey",
  																																								"level": "red",
  																																								"male": 1,
  																																								"female": 0,

  																																							},

  																																						]
  																																					},

  																																				]
  																																			},

  																																		]
  																																	}]
  																																}
  																															]

  																														},
  																														{
  																															"name": "Intern",
  																															"value": 5,
  																															"type": "steelblue",
  																															"level": "red",
  																															"male": 0,
  																															"female": 5,

  																														},

  																													]
  																												},

  																											]
  																										},
  																										{
  																											"name": "Technology",
  																											"value": 32,
  																											"type": "black",
  																											"level": "red",
  																											"male": 26,
  																											"female": 6,
  																											"children": [{
  																													"name": "Top Management",
  																													"value": 6,
  																													"type": "grey",
  																													"level": "red",
  																													"male": 6,
  																													"female": 0,
  																													"children": [{
  																															"name": "Engineering Manager",
  																															"value": 1,
  																															"type": "grey",
  																															"level": "red",
  																															"male": 1,
  																															"female": 0,

  																														},
  																														{
  																															"name": "Product Manager",
  																															"value": 1,
  																															"type": "grey",
  																															"level": "red",
  																															"male": 1,
  																															"female": 0,

  																														},

  																													]
  																												},
  																												{
  																													"name": "Junior Level",
  																													"value": 21,
  																													"type": "grey",
  																													"level": "red",
  																													"male": 16,
  																													"female": 5,
  																													"children": [{
  																															"name": "System Administrator",
  																															"value": 1,
  																															"type": "grey",
  																															"level": "red",
  																															"male": 1,
  																															"female": 0,
  																															"children": [{
  																																	"name": "Operation",
  																																	"value": 40,
  																																	"type": "black",
  																																	"level": "green",
  																																	"male": 23,
  																																	"female": 17,

  																																	"children": [{
  																																			"name": "Top Management",
  																																			"value": 3,
  																																			"type": "grey",
  																																			"level": "red",
  																																			"male": 3,
  																																			"female": 0,

  																																			"children": [{
  																																					"name": "Operation Manager",
  																																					"value": 1,
  																																					"type": "steelblue",
  																																					"level": "orange",
  																																					"male": 1,
  																																					"female": 0,

  																																				},
  																																				{
  																																					"name": "Account Strategist",
  																																					"value": 1,
  																																					"type": "steelblue",
  																																					"level": "red",
  																																					"male": 1,
  																																					"female": 0,

  																																				},

  																																			]
  																																		},
  																																		{
  																																			"name": "Junior Level",
  																																			"value": 23,
  																																			"type": "grey",
  																																			"level": "green",
  																																			"male": 10,
  																																			"female": 13,

  																																			"children": [{
  																																					"name": "Analyst",
  																																					"value": 10,
  																																					"type": "steelblue",
  																																					"level": "orange",
  																																					"male": 7,
  																																					"female": 3,

  																																					"children": [{
  																																							"name": "Top Management",
  																																							"value": 2,
  																																							"type": "black",
  																																							"level": "red",
  																																							"male": 2,
  																																							"female": 0,

  																																							"children": [{
  																																									"name": "Director",
  																																									"value": 1,
  																																									"type": "black",
  																																									"level": "red",
  																																									"male": 1,
  																																									"female": 0,

  																																								},
  																																								{
  																																									"name": "HR Manager",
  																																									"value": 1,
  																																									"type": "black",
  																																									"level": "red",
  																																									"male": 1,
  																																									"female": 0,

  																																								}
  																																							]
  																																						},
  																																						{
  																																							"name": "Middle Management",
  																																							"value": 1,
  																																							"type": "black",
  																																							"level": "red",
  																																							"male": 0,
  																																							"female": 1,
  																																							"children": [{
  																																								"name": "Front Office Executive",
  																																								"value": 1,
  																																								"type": "black",
  																																								"level": "red",
  																																								"male": 0,
  																																								"female": 1,

  																																							}]
  																																						}
  																																					]

  																																				},
  																																				{
  																																					"name": "Intern",
  																																					"value": 5,
  																																					"type": "steelblue",
  																																					"level": "red",
  																																					"male": 0,
  																																					"female": 5,

  																																				},

  																																			]
  																																		},

  																																	]
  																																},
  																																{
  																																	"name": "Technology",
  																																	"value": 32,
  																																	"type": "black",
  																																	"level": "red",
  																																	"male": 26,
  																																	"female": 6,
  																																	"children": [{
  																																			"name": "Top Management",
  																																			"value": 6,
  																																			"type": "grey",
  																																			"level": "red",
  																																			"male": 6,
  																																			"female": 0,
  																																			"children": [{
  																																					"name": "Engineering Manager",
  																																					"value": 1,
  																																					"type": "grey",
  																																					"level": "red",
  																																					"male": 1,
  																																					"female": 0,

  																																				},
  																																				{
  																																					"name": "Product Manager",
  																																					"value": 1,
  																																					"type": "grey",
  																																					"level": "red",
  																																					"male": 1,
  																																					"female": 0,

  																																				},

  																																			]
  																																		},
  																																		{
  																																			"name": "Junior Level",
  																																			"value": 21,
  																																			"type": "grey",
  																																			"level": "red",
  																																			"male": 16,
  																																			"female": 5,
  																																			"children": [{
  																																					"name": "System Administrator",
  																																					"value": 1,
  																																					"type": "grey",
  																																					"level": "red",
  																																					"male": 1,
  																																					"female": 0,

  																																				},
  																																				{
  																																					"name": "Support Engineer",
  																																					"value": 1,
  																																					"type": "grey",
  																																					"level": "red",
  																																					"male": 1,
  																																					"female": 0,
  																																					"children": [{
  																																							"name": "Operation",
  																																							"value": 40,
  																																							"type": "black",
  																																							"level": "green",
  																																							"male": 23,
  																																							"female": 17,

  																																							"children": [{
  																																									"name": "Top Management",
  																																									"value": 3,
  																																									"type": "grey",
  																																									"level": "red",
  																																									"male": 3,
  																																									"female": 0,

  																																									"children": [{
  																																											"name": "Operation Manager",
  																																											"value": 1,
  																																											"type": "steelblue",
  																																											"level": "orange",
  																																											"male": 1,
  																																											"female": 0,

  																																										},
  																																										{
  																																											"name": "Account Strategist",
  																																											"value": 1,
  																																											"type": "steelblue",
  																																											"level": "red",
  																																											"male": 1,
  																																											"female": 0,

  																																										},

  																																									]
  																																								},
  																																								{
  																																									"name": "Junior Level",
  																																									"value": 23,
  																																									"type": "grey",
  																																									"level": "green",
  																																									"male": 10,
  																																									"female": 13,

  																																									"children": [{
  																																											"name": "Analyst",
  																																											"value": 10,
  																																											"type": "steelblue",
  																																											"level": "orange",
  																																											"male": 7,
  																																											"female": 3,

  																																											"children": [{
  																																													"name": "Top Management",
  																																													"value": 2,
  																																													"type": "black",
  																																													"level": "red",
  																																													"male": 2,
  																																													"female": 0,

  																																													"children": [{
  																																															"name": "Director",
  																																															"value": 1,
  																																															"type": "black",
  																																															"level": "red",
  																																															"male": 1,
  																																															"female": 0,

  																																														},
  																																														{
  																																															"name": "HR Manager",
  																																															"value": 1,
  																																															"type": "black",
  																																															"level": "red",
  																																															"male": 1,
  																																															"female": 0,

  																																														}
  																																													]
  																																												},
  																																												{
  																																													"name": "Middle Management",
  																																													"value": 1,
  																																													"type": "black",
  																																													"level": "red",
  																																													"male": 0,
  																																													"female": 1,
  																																													"children": [{
  																																														"name": "Front Office Executive",
  																																														"value": 1,
  																																														"type": "black",
  																																														"level": "red",
  																																														"male": 0,
  																																														"female": 1,

  																																													}]
  																																												}
  																																											]

  																																										},
  																																										{
  																																											"name": "Intern",
  																																											"value": 5,
  																																											"type": "steelblue",
  																																											"level": "red",
  																																											"male": 0,
  																																											"female": 5,

  																																										},

  																																									]
  																																								},

  																																							]
  																																						},
  																																						{
  																																							"name": "Technology",
  																																							"value": 32,
  																																							"type": "black",
  																																							"level": "red",
  																																							"male": 26,
  																																							"female": 6,
  																																							"children": [{
  																																									"name": "Top Management",
  																																									"value": 6,
  																																									"type": "grey",
  																																									"level": "red",
  																																									"male": 6,
  																																									"female": 0,
  																																									"children": [{
  																																											"name": "Engineering Manager",
  																																											"value": 1,
  																																											"type": "grey",
  																																											"level": "red",
  																																											"male": 1,
  																																											"female": 0,

  																																										},
  																																										{
  																																											"name": "Product Manager",
  																																											"value": 1,
  																																											"type": "grey",
  																																											"level": "red",
  																																											"male": 1,
  																																											"female": 0,

  																																										},

  																																									]
  																																								},
  																																								{
  																																									"name": "Junior Level",
  																																									"value": 21,
  																																									"type": "grey",
  																																									"level": "red",
  																																									"male": 16,
  																																									"female": 5,
  																																									"children": [{
  																																											"name": "System Administrator",
  																																											"value": 1,
  																																											"type": "grey",
  																																											"level": "red",
  																																											"male": 1,
  																																											"female": 0,

  																																										},
  																																										{
  																																											"name": "Support Engineer",
  																																											"value": 1,
  																																											"type": "grey",
  																																											"level": "red",
  																																											"male": 1,
  																																											"female": 0,

  																																										},

  																																									]
  																																								},

  																																							]
  																																						},

  																																					]
  																																				},

  																																			]
  																																		},

  																																	]
  																																},

  																															]

  																														},
  																														{
  																															"name": "Support Engineer",
  																															"value": 1,
  																															"type": "grey",
  																															"level": "red",
  																															"male": 1,
  																															"female": 0,
  																															"children": [{
  																																	"name": "Operation",
  																																	"value": 40,
  																																	"type": "black",
  																																	"level": "green",
  																																	"male": 23,
  																																	"female": 17,

  																																	"children": [{
  																																			"name": "Top Management",
  																																			"value": 3,
  																																			"type": "grey",
  																																			"level": "red",
  																																			"male": 3,
  																																			"female": 0,

  																																			"children": [{
  																																					"name": "Operation Manager",
  																																					"value": 1,
  																																					"type": "steelblue",
  																																					"level": "orange",
  																																					"male": 1,
  																																					"female": 0,

  																																				},
  																																				{
  																																					"name": "Account Strategist",
  																																					"value": 1,
  																																					"type": "steelblue",
  																																					"level": "red",
  																																					"male": 1,
  																																					"female": 0,

  																																				},

  																																			]
  																																		},
  																																		{
  																																			"name": "Junior Level",
  																																			"value": 23,
  																																			"type": "grey",
  																																			"level": "green",
  																																			"male": 10,
  																																			"female": 13,

  																																			"children": [{
  																																					"name": "Analyst",
  																																					"value": 10,
  																																					"type": "steelblue",
  																																					"level": "orange",
  																																					"male": 7,
  																																					"female": 3,

  																																					"children": [{
  																																							"name": "Top Management",
  																																							"value": 2,
  																																							"type": "black",
  																																							"level": "red",
  																																							"male": 2,
  																																							"female": 0,

  																																							"children": [{
  																																									"name": "Director",
  																																									"value": 1,
  																																									"type": "black",
  																																									"level": "red",
  																																									"male": 1,
  																																									"female": 0,

  																																								},
  																																								{
  																																									"name": "HR Manager",
  																																									"value": 1,
  																																									"type": "black",
  																																									"level": "red",
  																																									"male": 1,
  																																									"female": 0,

  																																								}
  																																							]
  																																						},
  																																						{
  																																							"name": "Middle Management",
  																																							"value": 1,
  																																							"type": "black",
  																																							"level": "red",
  																																							"male": 0,
  																																							"female": 1,
  																																							"children": [{
  																																								"name": "Front Office Executive",
  																																								"value": 1,
  																																								"type": "black",
  																																								"level": "red",
  																																								"male": 0,
  																																								"female": 1,
  																																								"children": [{
  																																										"name": "Operation",
  																																										"value": 40,
  																																										"type": "black",
  																																										"level": "green",
  																																										"male": 23,
  																																										"female": 17,

  																																										"children": [{
  																																												"name": "Top Management",
  																																												"value": 3,
  																																												"type": "grey",
  																																												"level": "red",
  																																												"male": 3,
  																																												"female": 0,

  																																												"children": [{
  																																														"name": "Operation Manager",
  																																														"value": 1,
  																																														"type": "steelblue",
  																																														"level": "orange",
  																																														"male": 1,
  																																														"female": 0,

  																																													},
  																																													{
  																																														"name": "Account Strategist",
  																																														"value": 1,
  																																														"type": "steelblue",
  																																														"level": "red",
  																																														"male": 1,
  																																														"female": 0,

  																																													},

  																																												]
  																																											},
  																																											{
  																																												"name": "Junior Level",
  																																												"value": 23,
  																																												"type": "grey",
  																																												"level": "green",
  																																												"male": 10,
  																																												"female": 13,

  																																												"children": [{
  																																														"name": "Analyst",
  																																														"value": 10,
  																																														"type": "steelblue",
  																																														"level": "orange",
  																																														"male": 7,
  																																														"female": 3,

  																																														"children": [{
  																																																"name": "Top Management",
  																																																"value": 2,
  																																																"type": "black",
  																																																"level": "red",
  																																																"male": 2,
  																																																"female": 0,

  																																																"children": [{
  																																																		"name": "Director",
  																																																		"value": 1,
  																																																		"type": "black",
  																																																		"level": "red",
  																																																		"male": 1,
  																																																		"female": 0,

  																																																	},
  																																																	{
  																																																		"name": "HR Manager",
  																																																		"value": 1,
  																																																		"type": "black",
  																																																		"level": "red",
  																																																		"male": 1,
  																																																		"female": 0,

  																																																	}
  																																																]
  																																															},
  																																															{
  																																																"name": "Middle Management",
  																																																"value": 1,
  																																																"type": "black",
  																																																"level": "red",
  																																																"male": 0,
  																																																"female": 1,
  																																																"children": [{
  																																																	"name": "Front Office Executive",
  																																																	"value": 1,
  																																																	"type": "black",
  																																																	"level": "red",
  																																																	"male": 0,
  																																																	"female": 1,

  																																																}]
  																																															}
  																																														]

  																																													},
  																																													{
  																																														"name": "Intern",
  																																														"value": 5,
  																																														"type": "steelblue",
  																																														"level": "red",
  																																														"male": 0,
  																																														"female": 5,

  																																													},

  																																												]
  																																											},

  																																										]
  																																									},
  																																									{
  																																										"name": "Technology",
  																																										"value": 32,
  																																										"type": "black",
  																																										"level": "red",
  																																										"male": 26,
  																																										"female": 6,
  																																										"children": [{
  																																												"name": "Top Management",
  																																												"value": 6,
  																																												"type": "grey",
  																																												"level": "red",
  																																												"male": 6,
  																																												"female": 0,
  																																												"children": [{
  																																														"name": "Engineering Manager",
  																																														"value": 1,
  																																														"type": "grey",
  																																														"level": "red",
  																																														"male": 1,
  																																														"female": 0,

  																																													},
  																																													{
  																																														"name": "Product Manager",
  																																														"value": 1,
  																																														"type": "grey",
  																																														"level": "red",
  																																														"male": 1,
  																																														"female": 0,

  																																													},

  																																												]
  																																											},
  																																											{
  																																												"name": "Junior Level",
  																																												"value": 21,
  																																												"type": "grey",
  																																												"level": "red",
  																																												"male": 16,
  																																												"female": 5,
  																																												"children": [{
  																																														"name": "System Administrator",
  																																														"value": 1,
  																																														"type": "grey",
  																																														"level": "red",
  																																														"male": 1,
  																																														"female": 0,

  																																													},
  																																													{
  																																														"name": "Support Engineer",
  																																														"value": 1,
  																																														"type": "grey",
  																																														"level": "red",
  																																														"male": 1,
  																																														"female": 0,

  																																													},

  																																												]
  																																											},

  																																										]
  																																									},

  																																								]
  																																							}]
  																																						}
  																																					]

  																																				},
  																																				{
  																																					"name": "Intern",
  																																					"value": 5,
  																																					"type": "steelblue",
  																																					"level": "red",
  																																					"male": 0,
  																																					"female": 5,

  																																				},

  																																			]
  																																		},

  																																	]
  																																},
  																																{
  																																	"name": "Technology",
  																																	"value": 32,
  																																	"type": "black",
  																																	"level": "red",
  																																	"male": 26,
  																																	"female": 6,
  																																	"children": [{
  																																			"name": "Top Management",
  																																			"value": 6,
  																																			"type": "grey",
  																																			"level": "red",
  																																			"male": 6,
  																																			"female": 0,
  																																			"children": [{
  																																					"name": "Engineering Manager",
  																																					"value": 1,
  																																					"type": "grey",
  																																					"level": "red",
  																																					"male": 1,
  																																					"female": 0,

  																																				},
  																																				{
  																																					"name": "Product Manager",
  																																					"value": 1,
  																																					"type": "grey",
  																																					"level": "red",
  																																					"male": 1,
  																																					"female": 0,

  																																				},

  																																			]
  																																		},
  																																		{
  																																			"name": "Junior Level",
  																																			"value": 21,
  																																			"type": "grey",
  																																			"level": "red",
  																																			"male": 16,
  																																			"female": 5,
  																																			"children": [{
  																																					"name": "System Administrator",
  																																					"value": 1,
  																																					"type": "grey",
  																																					"level": "red",
  																																					"male": 1,
  																																					"female": 0,
  																																					"children": [{
  																																							"name": "Operation",
  																																							"value": 40,
  																																							"type": "black",
  																																							"level": "green",
  																																							"male": 23,
  																																							"female": 17,

  																																							"children": [{
  																																									"name": "Top Management",
  																																									"value": 3,
  																																									"type": "grey",
  																																									"level": "red",
  																																									"male": 3,
  																																									"female": 0,

  																																									"children": [{
  																																											"name": "Operation Manager",
  																																											"value": 1,
  																																											"type": "steelblue",
  																																											"level": "orange",
  																																											"male": 1,
  																																											"female": 0,

  																																										},
  																																										{
  																																											"name": "Account Strategist",
  																																											"value": 1,
  																																											"type": "steelblue",
  																																											"level": "red",
  																																											"male": 1,
  																																											"female": 0,

  																																										},

  																																									]
  																																								},
  																																								{
  																																									"name": "Junior Level",
  																																									"value": 23,
  																																									"type": "grey",
  																																									"level": "green",
  																																									"male": 10,
  																																									"female": 13,

  																																									"children": [{
  																																											"name": "Analyst",
  																																											"value": 10,
  																																											"type": "steelblue",
  																																											"level": "orange",
  																																											"male": 7,
  																																											"female": 3,

  																																											"children": [{
  																																													"name": "Top Management",
  																																													"value": 2,
  																																													"type": "black",
  																																													"level": "red",
  																																													"male": 2,
  																																													"female": 0,

  																																													"children": [{
  																																															"name": "Director",
  																																															"value": 1,
  																																															"type": "black",
  																																															"level": "red",
  																																															"male": 1,
  																																															"female": 0,

  																																														},
  																																														{
  																																															"name": "HR Manager",
  																																															"value": 1,
  																																															"type": "black",
  																																															"level": "red",
  																																															"male": 1,
  																																															"female": 0,

  																																														}
  																																													]
  																																												},
  																																												{
  																																													"name": "Middle Management",
  																																													"value": 1,
  																																													"type": "black",
  																																													"level": "red",
  																																													"male": 0,
  																																													"female": 1,
  																																													"children": [{
  																																														"name": "Front Office Executive",
  																																														"value": 1,
  																																														"type": "black",
  																																														"level": "red",
  																																														"male": 0,
  																																														"female": 1,

  																																													}]
  																																												}
  																																											]

  																																										},
  																																										{
  																																											"name": "Intern",
  																																											"value": 5,
  																																											"type": "steelblue",
  																																											"level": "red",
  																																											"male": 0,
  																																											"female": 5,

  																																										},

  																																									]
  																																								},

  																																							]
  																																						},
  																																						{
  																																							"name": "Technology",
  																																							"value": 32,
  																																							"type": "black",
  																																							"level": "red",
  																																							"male": 26,
  																																							"female": 6,
  																																							"children": [{
  																																									"name": "Top Management",
  																																									"value": 6,
  																																									"type": "grey",
  																																									"level": "red",
  																																									"male": 6,
  																																									"female": 0,
  																																									"children": [{
  																																											"name": "Engineering Manager",
  																																											"value": 1,
  																																											"type": "grey",
  																																											"level": "red",
  																																											"male": 1,
  																																											"female": 0,

  																																										},
  																																										{
  																																											"name": "Product Manager",
  																																											"value": 1,
  																																											"type": "grey",
  																																											"level": "red",
  																																											"male": 1,
  																																											"female": 0,

  																																										},

  																																									]
  																																								},
  																																								{
  																																									"name": "Junior Level",
  																																									"value": 21,
  																																									"type": "grey",
  																																									"level": "red",
  																																									"male": 16,
  																																									"female": 5,
  																																									"children": [{
  																																											"name": "System Administrator",
  																																											"value": 1,
  																																											"type": "grey",
  																																											"level": "red",
  																																											"male": 1,
  																																											"female": 0,

  																																										},
  																																										{
  																																											"name": "Support Engineer",
  																																											"value": 1,
  																																											"type": "grey",
  																																											"level": "red",
  																																											"male": 1,
  																																											"female": 0,
  																																											"children": [{
  																																													"name": "Operation",
  																																													"value": 40,
  																																													"type": "black",
  																																													"level": "green",
  																																													"male": 23,
  																																													"female": 17,

  																																													"children": [{
  																																															"name": "Top Management",
  																																															"value": 3,
  																																															"type": "grey",
  																																															"level": "red",
  																																															"male": 3,
  																																															"female": 0,

  																																															"children": [{
  																																																	"name": "Operation Manager",
  																																																	"value": 1,
  																																																	"type": "steelblue",
  																																																	"level": "orange",
  																																																	"male": 1,
  																																																	"female": 0,

  																																																},
  																																																{
  																																																	"name": "Account Strategist",
  																																																	"value": 1,
  																																																	"type": "steelblue",
  																																																	"level": "red",
  																																																	"male": 1,
  																																																	"female": 0,

  																																																},

  																																															]
  																																														},
  																																														{
  																																															"name": "Junior Level",
  																																															"value": 23,
  																																															"type": "grey",
  																																															"level": "green",
  																																															"male": 10,
  																																															"female": 13,

  																																															"children": [{
  																																																	"name": "Analyst",
  																																																	"value": 10,
  																																																	"type": "steelblue",
  																																																	"level": "orange",
  																																																	"male": 7,
  																																																	"female": 3,

  																																																	"children": [{
  																																																			"name": "Top Management",
  																																																			"value": 2,
  																																																			"type": "black",
  																																																			"level": "red",
  																																																			"male": 2,
  																																																			"female": 0,

  																																																			"children": [{
  																																																					"name": "Director",
  																																																					"value": 1,
  																																																					"type": "black",
  																																																					"level": "red",
  																																																					"male": 1,
  																																																					"female": 0,

  																																																				},
  																																																				{
  																																																					"name": "HR Manager",
  																																																					"value": 1,
  																																																					"type": "black",
  																																																					"level": "red",
  																																																					"male": 1,
  																																																					"female": 0,

  																																																				}
  																																																			]
  																																																		},
  																																																		{
  																																																			"name": "Middle Management",
  																																																			"value": 1,
  																																																			"type": "black",
  																																																			"level": "red",
  																																																			"male": 0,
  																																																			"female": 1,
  																																																			"children": [{
  																																																				"name": "Front Office Executive",
  																																																				"value": 1,
  																																																				"type": "black",
  																																																				"level": "red",
  																																																				"male": 0,
  																																																				"female": 1,

  																																																			}]
  																																																		}
  																																																	]

  																																																},
  																																																{
  																																																	"name": "Intern",
  																																																	"value": 5,
  																																																	"type": "steelblue",
  																																																	"level": "red",
  																																																	"male": 0,
  																																																	"female": 5,

  																																																},

  																																															]
  																																														},

  																																													]
  																																												},
  																																												{
  																																													"name": "Technology",
  																																													"value": 32,
  																																													"type": "black",
  																																													"level": "red",
  																																													"male": 26,
  																																													"female": 6,
  																																													"children": [{
  																																															"name": "Top Management",
  																																															"value": 6,
  																																															"type": "grey",
  																																															"level": "red",
  																																															"male": 6,
  																																															"female": 0,
  																																															"children": [{
  																																																	"name": "Engineering Manager",
  																																																	"value": 1,
  																																																	"type": "grey",
  																																																	"level": "red",
  																																																	"male": 1,
  																																																	"female": 0,

  																																																},
  																																																{
  																																																	"name": "Product Manager",
  																																																	"value": 1,
  																																																	"type": "grey",
  																																																	"level": "red",
  																																																	"male": 1,
  																																																	"female": 0,

  																																																},

  																																															]
  																																														},
  																																														{
  																																															"name": "Junior Level",
  																																															"value": 21,
  																																															"type": "grey",
  																																															"level": "red",
  																																															"male": 16,
  																																															"female": 5,
  																																															"children": [{
  																																																	"name": "System Administrator",
  																																																	"value": 1,
  																																																	"type": "grey",
  																																																	"level": "red",
  																																																	"male": 1,
  																																																	"female": 0,

  																																																},
  																																																{
  																																																	"name": "Support Engineer",
  																																																	"value": 1,
  																																																	"type": "grey",
  																																																	"level": "red",
  																																																	"male": 1,
  																																																	"female": 0,

  																																																},

  																																															]
  																																														},

  																																													]
  																																												},

  																																											]
  																																										},

  																																									]
  																																								},

  																																							]
  																																						},

  																																					]

  																																				},
  																																				{
  																																					"name": "Support Engineer",
  																																					"value": 1,
  																																					"type": "grey",
  																																					"level": "red",
  																																					"male": 1,
  																																					"female": 0,
  																																					"children": [{
  																																							"name": "Operation",
  																																							"value": 40,
  																																							"type": "black",
  																																							"level": "green",
  																																							"male": 23,
  																																							"female": 17,

  																																							"children": [{
  																																									"name": "Top Management",
  																																									"value": 3,
  																																									"type": "grey",
  																																									"level": "red",
  																																									"male": 3,
  																																									"female": 0,

  																																									"children": [{
  																																											"name": "Operation Manager",
  																																											"value": 1,
  																																											"type": "steelblue",
  																																											"level": "orange",
  																																											"male": 1,
  																																											"female": 0,

  																																										},
  																																										{
  																																											"name": "Account Strategist",
  																																											"value": 1,
  																																											"type": "steelblue",
  																																											"level": "red",
  																																											"male": 1,
  																																											"female": 0,

  																																										},

  																																									]
  																																								},
  																																								{
  																																									"name": "Junior Level",
  																																									"value": 23,
  																																									"type": "grey",
  																																									"level": "green",
  																																									"male": 10,
  																																									"female": 13,

  																																									"children": [{
  																																											"name": "Analyst",
  																																											"value": 10,
  																																											"type": "steelblue",
  																																											"level": "orange",
  																																											"male": 7,
  																																											"female": 3,

  																																											"children": [{
  																																													"name": "Top Management",
  																																													"value": 2,
  																																													"type": "black",
  																																													"level": "red",
  																																													"male": 2,
  																																													"female": 0,

  																																													"children": [{
  																																															"name": "Director",
  																																															"value": 1,
  																																															"type": "black",
  																																															"level": "red",
  																																															"male": 1,
  																																															"female": 0,

  																																														},
  																																														{
  																																															"name": "HR Manager",
  																																															"value": 1,
  																																															"type": "black",
  																																															"level": "red",
  																																															"male": 1,
  																																															"female": 0,

  																																														}
  																																													]
  																																												},
  																																												{
  																																													"name": "Middle Management",
  																																													"value": 1,
  																																													"type": "black",
  																																													"level": "red",
  																																													"male": 0,
  																																													"female": 1,
  																																													"children": [{
  																																														"name": "Front Office Executive",
  																																														"value": 1,
  																																														"type": "black",
  																																														"level": "red",
  																																														"male": 0,
  																																														"female": 1,
  																																														"children": [{
  																																																"name": "Operation",
  																																																"value": 40,
  																																																"type": "black",
  																																																"level": "green",
  																																																"male": 23,
  																																																"female": 17,

  																																																"children": [{
  																																																		"name": "Top Management",
  																																																		"value": 3,
  																																																		"type": "grey",
  																																																		"level": "red",
  																																																		"male": 3,
  																																																		"female": 0,

  																																																		"children": [{
  																																																				"name": "Operation Manager",
  																																																				"value": 1,
  																																																				"type": "steelblue",
  																																																				"level": "orange",
  																																																				"male": 1,
  																																																				"female": 0,

  																																																			},
  																																																			{
  																																																				"name": "Account Strategist",
  																																																				"value": 1,
  																																																				"type": "steelblue",
  																																																				"level": "red",
  																																																				"male": 1,
  																																																				"female": 0,

  																																																			},

  																																																		]
  																																																	},
  																																																	{
  																																																		"name": "Junior Level",
  																																																		"value": 23,
  																																																		"type": "grey",
  																																																		"level": "green",
  																																																		"male": 10,
  																																																		"female": 13,

  																																																		"children": [{
  																																																				"name": "Analyst",
  																																																				"value": 10,
  																																																				"type": "steelblue",
  																																																				"level": "orange",
  																																																				"male": 7,
  																																																				"female": 3,

  																																																				"children": [{
  																																																						"name": "Top Management",
  																																																						"value": 2,
  																																																						"type": "black",
  																																																						"level": "red",
  																																																						"male": 2,
  																																																						"female": 0,

  																																																						"children": [{
  																																																								"name": "Director",
  																																																								"value": 1,
  																																																								"type": "black",
  																																																								"level": "red",
  																																																								"male": 1,
  																																																								"female": 0,

  																																																							},
  																																																							{
  																																																								"name": "HR Manager",
  																																																								"value": 1,
  																																																								"type": "black",
  																																																								"level": "red",
  																																																								"male": 1,
  																																																								"female": 0,

  																																																							}
  																																																						]
  																																																					},
  																																																					{
  																																																						"name": "Middle Management",
  																																																						"value": 1,
  																																																						"type": "black",
  																																																						"level": "red",
  																																																						"male": 0,
  																																																						"female": 1,
  																																																						"children": [{
  																																																							"name": "Front Office Executive",
  																																																							"value": 1,
  																																																							"type": "black",
  																																																							"level": "red",
  																																																							"male": 0,
  																																																							"female": 1,

  																																																						}]
  																																																					}
  																																																				]

  																																																			},
  																																																			{
  																																																				"name": "Intern",
  																																																				"value": 5,
  																																																				"type": "steelblue",
  																																																				"level": "red",
  																																																				"male": 0,
  																																																				"female": 5,

  																																																			},

  																																																		]
  																																																	},

  																																																]
  																																															},
  																																															{
  																																																"name": "Technology",
  																																																"value": 32,
  																																																"type": "black",
  																																																"level": "red",
  																																																"male": 26,
  																																																"female": 6,
  																																																"children": [{
  																																																		"name": "Top Management",
  																																																		"value": 6,
  																																																		"type": "grey",
  																																																		"level": "red",
  																																																		"male": 6,
  																																																		"female": 0,
  																																																		"children": [{
  																																																				"name": "Engineering Manager",
  																																																				"value": 1,
  																																																				"type": "grey",
  																																																				"level": "red",
  																																																				"male": 1,
  																																																				"female": 0,

  																																																			},
  																																																			{
  																																																				"name": "Product Manager",
  																																																				"value": 1,
  																																																				"type": "grey",
  																																																				"level": "red",
  																																																				"male": 1,
  																																																				"female": 0,

  																																																			},

  																																																		]
  																																																	},
  																																																	{
  																																																		"name": "Junior Level",
  																																																		"value": 21,
  																																																		"type": "grey",
  																																																		"level": "red",
  																																																		"male": 16,
  																																																		"female": 5,
  																																																		"children": [{
  																																																				"name": "System Administrator",
  																																																				"value": 1,
  																																																				"type": "grey",
  																																																				"level": "red",
  																																																				"male": 1,
  																																																				"female": 0,

  																																																			},
  																																																			{
  																																																				"name": "Support Engineer",
  																																																				"value": 1,
  																																																				"type": "grey",
  																																																				"level": "red",
  																																																				"male": 1,
  																																																				"female": 0,

  																																																			},

  																																																		]
  																																																	},

  																																																]
  																																															},

  																																														]
  																																													}]
  																																												}
  																																											]

  																																										},
  																																										{
  																																											"name": "Intern",
  																																											"value": 5,
  																																											"type": "steelblue",
  																																											"level": "red",
  																																											"male": 0,
  																																											"female": 5,

  																																										},

  																																									]
  																																								},

  																																							]
  																																						},
  																																						{
  																																							"name": "Technology",
  																																							"value": 32,
  																																							"type": "black",
  																																							"level": "red",
  																																							"male": 26,
  																																							"female": 6,
  																																							"children": [{
  																																									"name": "Top Management",
  																																									"value": 6,
  																																									"type": "grey",
  																																									"level": "red",
  																																									"male": 6,
  																																									"female": 0,
  																																									"children": [{
  																																											"name": "Engineering Manager",
  																																											"value": 1,
  																																											"type": "grey",
  																																											"level": "red",
  																																											"male": 1,
  																																											"female": 0,

  																																										},
  																																										{
  																																											"name": "Product Manager",
  																																											"value": 1,
  																																											"type": "grey",
  																																											"level": "red",
  																																											"male": 1,
  																																											"female": 0,

  																																										},

  																																									]
  																																								},
  																																								{
  																																									"name": "Junior Level",
  																																									"value": 21,
  																																									"type": "grey",
  																																									"level": "red",
  																																									"male": 16,
  																																									"female": 5,
  																																									"children": [{
  																																											"name": "System Administrator",
  																																											"value": 1,
  																																											"type": "grey",
  																																											"level": "red",
  																																											"male": 1,
  																																											"female": 0,
  																																											"children": [{
  																																													"name": "Operation",
  																																													"value": 40,
  																																													"type": "black",
  																																													"level": "green",
  																																													"male": 23,
  																																													"female": 17,

  																																													"children": [{
  																																															"name": "Top Management",
  																																															"value": 3,
  																																															"type": "grey",
  																																															"level": "red",
  																																															"male": 3,
  																																															"female": 0,

  																																															"children": [{
  																																																	"name": "Operation Manager",
  																																																	"value": 1,
  																																																	"type": "steelblue",
  																																																	"level": "orange",
  																																																	"male": 1,
  																																																	"female": 0,

  																																																},
  																																																{
  																																																	"name": "Account Strategist",
  																																																	"value": 1,
  																																																	"type": "steelblue",
  																																																	"level": "red",
  																																																	"male": 1,
  																																																	"female": 0,

  																																																},

  																																															]
  																																														},
  																																														{
  																																															"name": "Junior Level",
  																																															"value": 23,
  																																															"type": "grey",
  																																															"level": "green",
  																																															"male": 10,
  																																															"female": 13,

  																																															"children": [{
  																																																	"name": "Analyst",
  																																																	"value": 10,
  																																																	"type": "steelblue",
  																																																	"level": "orange",
  																																																	"male": 7,
  																																																	"female": 3,

  																																																	"children": [{
  																																																			"name": "Top Management",
  																																																			"value": 2,
  																																																			"type": "black",
  																																																			"level": "red",
  																																																			"male": 2,
  																																																			"female": 0,

  																																																			"children": [{
  																																																					"name": "Director",
  																																																					"value": 1,
  																																																					"type": "black",
  																																																					"level": "red",
  																																																					"male": 1,
  																																																					"female": 0,

  																																																				},
  																																																				{
  																																																					"name": "HR Manager",
  																																																					"value": 1,
  																																																					"type": "black",
  																																																					"level": "red",
  																																																					"male": 1,
  																																																					"female": 0,

  																																																				}
  																																																			]
  																																																		},
  																																																		{
  																																																			"name": "Middle Management",
  																																																			"value": 1,
  																																																			"type": "black",
  																																																			"level": "red",
  																																																			"male": 0,
  																																																			"female": 1,
  																																																			"children": [{
  																																																				"name": "Front Office Executive",
  																																																				"value": 1,
  																																																				"type": "black",
  																																																				"level": "red",
  																																																				"male": 0,
  																																																				"female": 1,

  																																																			}]
  																																																		}
  																																																	]

  																																																},
  																																																{
  																																																	"name": "Intern",
  																																																	"value": 5,
  																																																	"type": "steelblue",
  																																																	"level": "red",
  																																																	"male": 0,
  																																																	"female": 5,

  																																																},

  																																															]
  																																														},

  																																													]
  																																												},
  																																												{
  																																													"name": "Technology",
  																																													"value": 32,
  																																													"type": "black",
  																																													"level": "red",
  																																													"male": 26,
  																																													"female": 6,
  																																													"children": [{
  																																															"name": "Top Management",
  																																															"value": 6,
  																																															"type": "grey",
  																																															"level": "red",
  																																															"male": 6,
  																																															"female": 0,
  																																															"children": [{
  																																																	"name": "Engineering Manager",
  																																																	"value": 1,
  																																																	"type": "grey",
  																																																	"level": "red",
  																																																	"male": 1,
  																																																	"female": 0,

  																																																},
  																																																{
  																																																	"name": "Product Manager",
  																																																	"value": 1,
  																																																	"type": "grey",
  																																																	"level": "red",
  																																																	"male": 1,
  																																																	"female": 0,

  																																																},

  																																															]
  																																														},
  																																														{
  																																															"name": "Junior Level",
  																																															"value": 21,
  																																															"type": "grey",
  																																															"level": "red",
  																																															"male": 16,
  																																															"female": 5,
  																																															"children": [{
  																																																	"name": "System Administrator",
  																																																	"value": 1,
  																																																	"type": "grey",
  																																																	"level": "red",
  																																																	"male": 1,
  																																																	"female": 0,

  																																																},
  																																																{
  																																																	"name": "Support Engineer",
  																																																	"value": 1,
  																																																	"type": "grey",
  																																																	"level": "red",
  																																																	"male": 1,
  																																																	"female": 0,
  																																																	"children": [{
  																																																			"name": "Operation",
  																																																			"value": 40,
  																																																			"type": "black",
  																																																			"level": "green",
  																																																			"male": 23,
  																																																			"female": 17,

  																																																			"children": [{
  																																																					"name": "Top Management",
  																																																					"value": 3,
  																																																					"type": "grey",
  																																																					"level": "red",
  																																																					"male": 3,
  																																																					"female": 0,

  																																																					"children": [{
  																																																							"name": "Operation Manager",
  																																																							"value": 1,
  																																																							"type": "steelblue",
  																																																							"level": "orange",
  																																																							"male": 1,
  																																																							"female": 0,

  																																																						},
  																																																						{
  																																																							"name": "Account Strategist",
  																																																							"value": 1,
  																																																							"type": "steelblue",
  																																																							"level": "red",
  																																																							"male": 1,
  																																																							"female": 0,

  																																																						},

  																																																					]
  																																																				},
  																																																				{
  																																																					"name": "Junior Level",
  																																																					"value": 23,
  																																																					"type": "grey",
  																																																					"level": "green",
  																																																					"male": 10,
  																																																					"female": 13,

  																																																					"children": [{
  																																																							"name": "Analyst",
  																																																							"value": 10,
  																																																							"type": "steelblue",
  																																																							"level": "orange",
  																																																							"male": 7,
  																																																							"female": 3,

  																																																							"children": [{
  																																																									"name": "Top Management",
  																																																									"value": 2,
  																																																									"type": "black",
  																																																									"level": "red",
  																																																									"male": 2,
  																																																									"female": 0,

  																																																									"children": [{
  																																																											"name": "Director",
  																																																											"value": 1,
  																																																											"type": "black",
  																																																											"level": "red",
  																																																											"male": 1,
  																																																											"female": 0,

  																																																										},
  																																																										{
  																																																											"name": "HR Manager",
  																																																											"value": 1,
  																																																											"type": "black",
  																																																											"level": "red",
  																																																											"male": 1,
  																																																											"female": 0,

  																																																										}
  																																																									]
  																																																								},
  																																																								{
  																																																									"name": "Middle Management",
  																																																									"value": 1,
  																																																									"type": "black",
  																																																									"level": "red",
  																																																									"male": 0,
  																																																									"female": 1,
  																																																									"children": [{
  																																																										"name": "Front Office Executive",
  																																																										"value": 1,
  																																																										"type": "black",
  																																																										"level": "red",
  																																																										"male": 0,
  																																																										"female": 1,

  																																																									}]
  																																																								}
  																																																							]

  																																																						},
  																																																						{
  																																																							"name": "Intern",
  																																																							"value": 5,
  																																																							"type": "steelblue",
  																																																							"level": "red",
  																																																							"male": 0,
  																																																							"female": 5,

  																																																						},

  																																																					]
  																																																				},

  																																																			]
  																																																		},
  																																																		{
  																																																			"name": "Technology",
  																																																			"value": 32,
  																																																			"type": "black",
  																																																			"level": "red",
  																																																			"male": 26,
  																																																			"female": 6,
  																																																			"children": [{
  																																																					"name": "Top Management",
  																																																					"value": 6,
  																																																					"type": "grey",
  																																																					"level": "red",
  																																																					"male": 6,
  																																																					"female": 0,
  																																																					"children": [{
  																																																							"name": "Engineering Manager",
  																																																							"value": 1,
  																																																							"type": "grey",
  																																																							"level": "red",
  																																																							"male": 1,
  																																																							"female": 0,

  																																																						},
  																																																						{
  																																																							"name": "Product Manager",
  																																																							"value": 1,
  																																																							"type": "grey",
  																																																							"level": "red",
  																																																							"male": 1,
  																																																							"female": 0,

  																																																						},

  																																																					]
  																																																				},
  																																																				{
  																																																					"name": "Junior Level",
  																																																					"value": 21,
  																																																					"type": "grey",
  																																																					"level": "red",
  																																																					"male": 16,
  																																																					"female": 5,
  																																																					"children": [{
  																																																							"name": "System Administrator",
  																																																							"value": 1,
  																																																							"type": "grey",
  																																																							"level": "red",
  																																																							"male": 1,
  																																																							"female": 0,

  																																																						},
  																																																						{
  																																																							"name": "Support Engineer",
  																																																							"value": 1,
  																																																							"type": "grey",
  																																																							"level": "red",
  																																																							"male": 1,
  																																																							"female": 0,

  																																																						},

  																																																					]
  																																																				},

  																																																			]
  																																																		},

  																																																	]
  																																																},

  																																															]
  																																														},

  																																													]
  																																												},

  																																											]

  																																										},
  																																										{
  																																											"name": "Support Engineer",
  																																											"value": 1,
  																																											"type": "grey",
  																																											"level": "red",
  																																											"male": 1,
  																																											"female": 0,
  																																											"children": [{
  																																													"name": "Operation",
  																																													"value": 40,
  																																													"type": "black",
  																																													"level": "green",
  																																													"male": 23,
  																																													"female": 17,

  																																													"children": [{
  																																															"name": "Top Management",
  																																															"value": 3,
  																																															"type": "grey",
  																																															"level": "red",
  																																															"male": 3,
  																																															"female": 0,

  																																															"children": [{
  																																																	"name": "Operation Manager",
  																																																	"value": 1,
  																																																	"type": "steelblue",
  																																																	"level": "orange",
  																																																	"male": 1,
  																																																	"female": 0,

  																																																},
  																																																{
  																																																	"name": "Account Strategist",
  																																																	"value": 1,
  																																																	"type": "steelblue",
  																																																	"level": "red",
  																																																	"male": 1,
  																																																	"female": 0,

  																																																},

  																																															]
  																																														},
  																																														{
  																																															"name": "Junior Level",
  																																															"value": 23,
  																																															"type": "grey",
  																																															"level": "green",
  																																															"male": 10,
  																																															"female": 13,

  																																															"children": [{
  																																																	"name": "Analyst",
  																																																	"value": 10,
  																																																	"type": "steelblue",
  																																																	"level": "orange",
  																																																	"male": 7,
  																																																	"female": 3,

  																																																	"children": [{
  																																																			"name": "Top Management",
  																																																			"value": 2,
  																																																			"type": "black",
  																																																			"level": "red",
  																																																			"male": 2,
  																																																			"female": 0,

  																																																			"children": [{
  																																																					"name": "Director",
  																																																					"value": 1,
  																																																					"type": "black",
  																																																					"level": "red",
  																																																					"male": 1,
  																																																					"female": 0,

  																																																				},
  																																																				{
  																																																					"name": "HR Manager",
  																																																					"value": 1,
  																																																					"type": "black",
  																																																					"level": "red",
  																																																					"male": 1,
  																																																					"female": 0,

  																																																				}
  																																																			]
  																																																		},
  																																																		{
  																																																			"name": "Middle Management",
  																																																			"value": 1,
  																																																			"type": "black",
  																																																			"level": "red",
  																																																			"male": 0,
  																																																			"female": 1,
  																																																			"children": [{
  																																																				"name": "Front Office Executive",
  																																																				"value": 1,
  																																																				"type": "black",
  																																																				"level": "red",
  																																																				"male": 0,
  																																																				"female": 1,
  																																																				"children": [{
  																																																						"name": "Operation",
  																																																						"value": 40,
  																																																						"type": "black",
  																																																						"level": "green",
  																																																						"male": 23,
  																																																						"female": 17,

  																																																						"children": [{
  																																																								"name": "Top Management",
  																																																								"value": 3,
  																																																								"type": "grey",
  																																																								"level": "red",
  																																																								"male": 3,
  																																																								"female": 0,

  																																																								"children": [{
  																																																										"name": "Operation Manager",
  																																																										"value": 1,
  																																																										"type": "steelblue",
  																																																										"level": "orange",
  																																																										"male": 1,
  																																																										"female": 0,

  																																																									},
  																																																									{
  																																																										"name": "Account Strategist",
  																																																										"value": 1,
  																																																										"type": "steelblue",
  																																																										"level": "red",
  																																																										"male": 1,
  																																																										"female": 0,

  																																																									},

  																																																								]
  																																																							},
  																																																							{
  																																																								"name": "Junior Level",
  																																																								"value": 23,
  																																																								"type": "grey",
  																																																								"level": "green",
  																																																								"male": 10,
  																																																								"female": 13,

  																																																								"children": [{
  																																																										"name": "Analyst",
  																																																										"value": 10,
  																																																										"type": "steelblue",
  																																																										"level": "orange",
  																																																										"male": 7,
  																																																										"female": 3,

  																																																										"children": [{
  																																																												"name": "Top Management",
  																																																												"value": 2,
  																																																												"type": "black",
  																																																												"level": "red",
  																																																												"male": 2,
  																																																												"female": 0,

  																																																												"children": [{
  																																																														"name": "Director",
  																																																														"value": 1,
  																																																														"type": "black",
  																																																														"level": "red",
  																																																														"male": 1,
  																																																														"female": 0,

  																																																													},
  																																																													{
  																																																														"name": "HR Manager",
  																																																														"value": 1,
  																																																														"type": "black",
  																																																														"level": "red",
  																																																														"male": 1,
  																																																														"female": 0,

  																																																													}
  																																																												]
  																																																											},
  																																																											{
  																																																												"name": "Middle Management",
  																																																												"value": 1,
  																																																												"type": "black",
  																																																												"level": "red",
  																																																												"male": 0,
  																																																												"female": 1,
  																																																												"children": [{
  																																																													"name": "Front Office Executive",
  																																																													"value": 1,
  																																																													"type": "black",
  																																																													"level": "red",
  																																																													"male": 0,
  																																																													"female": 1,

  																																																												}]
  																																																											}
  																																																										]

  																																																									},
  																																																									{
  																																																										"name": "Intern",
  																																																										"value": 5,
  																																																										"type": "steelblue",
  																																																										"level": "red",
  																																																										"male": 0,
  																																																										"female": 5,

  																																																									},

  																																																								]
  																																																							},

  																																																						]
  																																																					},
  																																																					{
  																																																						"name": "Technology",
  																																																						"value": 32,
  																																																						"type": "black",
  																																																						"level": "red",
  																																																						"male": 26,
  																																																						"female": 6,
  																																																						"children": [{
  																																																								"name": "Top Management",
  																																																								"value": 6,
  																																																								"type": "grey",
  																																																								"level": "red",
  																																																								"male": 6,
  																																																								"female": 0,
  																																																								"children": [{
  																																																										"name": "Engineering Manager",
  																																																										"value": 1,
  																																																										"type": "grey",
  																																																										"level": "red",
  																																																										"male": 1,
  																																																										"female": 0,

  																																																									},
  																																																									{
  																																																										"name": "Product Manager",
  																																																										"value": 1,
  																																																										"type": "grey",
  																																																										"level": "red",
  																																																										"male": 1,
  																																																										"female": 0,

  																																																									},

  																																																								]
  																																																							},
  																																																							{
  																																																								"name": "Junior Level",
  																																																								"value": 21,
  																																																								"type": "grey",
  																																																								"level": "red",
  																																																								"male": 16,
  																																																								"female": 5,
  																																																								"children": [{
  																																																										"name": "System Administrator",
  																																																										"value": 1,
  																																																										"type": "grey",
  																																																										"level": "red",
  																																																										"male": 1,
  																																																										"female": 0,

  																																																									},
  																																																									{
  																																																										"name": "Support Engineer",
  																																																										"value": 1,
  																																																										"type": "grey",
  																																																										"level": "red",
  																																																										"male": 1,
  																																																										"female": 0,

  																																																									},

  																																																								]
  																																																							},

  																																																						]
  																																																					},

  																																																				]
  																																																			}]
  																																																		}
  																																																	]

  																																																},
  																																																{
  																																																	"name": "Intern",
  																																																	"value": 5,
  																																																	"type": "steelblue",
  																																																	"level": "red",
  																																																	"male": 0,
  																																																	"female": 5,

  																																																},

  																																															]
  																																														},

  																																													]
  																																												},
  																																												{
  																																													"name": "Technology",
  																																													"value": 32,
  																																													"type": "black",
  																																													"level": "red",
  																																													"male": 26,
  																																													"female": 6,
  																																													"children": [{
  																																															"name": "Top Management",
  																																															"value": 6,
  																																															"type": "grey",
  																																															"level": "red",
  																																															"male": 6,
  																																															"female": 0,
  																																															"children": [{
  																																																	"name": "Engineering Manager",
  																																																	"value": 1,
  																																																	"type": "grey",
  																																																	"level": "red",
  																																																	"male": 1,
  																																																	"female": 0,

  																																																},
  																																																{
  																																																	"name": "Product Manager",
  																																																	"value": 1,
  																																																	"type": "grey",
  																																																	"level": "red",
  																																																	"male": 1,
  																																																	"female": 0,

  																																																},

  																																															]
  																																														},
  																																														{
  																																															"name": "Junior Level",
  																																															"value": 21,
  																																															"type": "grey",
  																																															"level": "red",
  																																															"male": 16,
  																																															"female": 5,
  																																															"children": [{
  																																																	"name": "System Administrator",
  																																																	"value": 1,
  																																																	"type": "grey",
  																																																	"level": "red",
  																																																	"male": 1,
  																																																	"female": 0,
  																																																	"children": [{
  																																																			"name": "Operation",
  																																																			"value": 40,
  																																																			"type": "black",
  																																																			"level": "green",
  																																																			"male": 23,
  																																																			"female": 17,

  																																																			"children": [{
  																																																					"name": "Top Management",
  																																																					"value": 3,
  																																																					"type": "grey",
  																																																					"level": "red",
  																																																					"male": 3,
  																																																					"female": 0,

  																																																					"children": [{
  																																																							"name": "Operation Manager",
  																																																							"value": 1,
  																																																							"type": "steelblue",
  																																																							"level": "orange",
  																																																							"male": 1,
  																																																							"female": 0,

  																																																						},
  																																																						{
  																																																							"name": "Account Strategist",
  																																																							"value": 1,
  																																																							"type": "steelblue",
  																																																							"level": "red",
  																																																							"male": 1,
  																																																							"female": 0,

  																																																						},

  																																																					]
  																																																				},
  																																																				{
  																																																					"name": "Junior Level",
  																																																					"value": 23,
  																																																					"type": "grey",
  																																																					"level": "green",
  																																																					"male": 10,
  																																																					"female": 13,

  																																																					"children": [{
  																																																							"name": "Analyst",
  																																																							"value": 10,
  																																																							"type": "steelblue",
  																																																							"level": "orange",
  																																																							"male": 7,
  																																																							"female": 3,

  																																																							"children": [{
  																																																									"name": "Top Management",
  																																																									"value": 2,
  																																																									"type": "black",
  																																																									"level": "red",
  																																																									"male": 2,
  																																																									"female": 0,

  																																																									"children": [{
  																																																											"name": "Director",
  																																																											"value": 1,
  																																																											"type": "black",
  																																																											"level": "red",
  																																																											"male": 1,
  																																																											"female": 0,

  																																																										},
  																																																										{
  																																																											"name": "HR Manager",
  																																																											"value": 1,
  																																																											"type": "black",
  																																																											"level": "red",
  																																																											"male": 1,
  																																																											"female": 0,

  																																																										}
  																																																									]
  																																																								},
  																																																								{
  																																																									"name": "Middle Management",
  																																																									"value": 1,
  																																																									"type": "black",
  																																																									"level": "red",
  																																																									"male": 0,
  																																																									"female": 1,
  																																																									"children": [{
  																																																										"name": "Front Office Executive",
  																																																										"value": 1,
  																																																										"type": "black",
  																																																										"level": "red",
  																																																										"male": 0,
  																																																										"female": 1,

  																																																									}]
  																																																								}
  																																																							]

  																																																						},
  																																																						{
  																																																							"name": "Intern",
  																																																							"value": 5,
  																																																							"type": "steelblue",
  																																																							"level": "red",
  																																																							"male": 0,
  																																																							"female": 5,

  																																																						},

  																																																					]
  																																																				},

  																																																			]
  																																																		},
  																																																		{
  																																																			"name": "Technology",
  																																																			"value": 32,
  																																																			"type": "black",
  																																																			"level": "red",
  																																																			"male": 26,
  																																																			"female": 6,
  																																																			"children": [{
  																																																					"name": "Top Management",
  																																																					"value": 6,
  																																																					"type": "grey",
  																																																					"level": "red",
  																																																					"male": 6,
  																																																					"female": 0,
  																																																					"children": [{
  																																																							"name": "Engineering Manager",
  																																																							"value": 1,
  																																																							"type": "grey",
  																																																							"level": "red",
  																																																							"male": 1,
  																																																							"female": 0,

  																																																						},
  																																																						{
  																																																							"name": "Product Manager",
  																																																							"value": 1,
  																																																							"type": "grey",
  																																																							"level": "red",
  																																																							"male": 1,
  																																																							"female": 0,

  																																																						},

  																																																					]
  																																																				},
  																																																				{
  																																																					"name": "Junior Level",
  																																																					"value": 21,
  																																																					"type": "grey",
  																																																					"level": "red",
  																																																					"male": 16,
  																																																					"female": 5,
  																																																					"children": [{
  																																																							"name": "System Administrator",
  																																																							"value": 1,
  																																																							"type": "grey",
  																																																							"level": "red",
  																																																							"male": 1,
  																																																							"female": 0,

  																																																						},
  																																																						{
  																																																							"name": "Support Engineer",
  																																																							"value": 1,
  																																																							"type": "grey",
  																																																							"level": "red",
  																																																							"male": 1,
  																																																							"female": 0,
  																																																							"children": [{
  																																																									"name": "Operation",
  																																																									"value": 40,
  																																																									"type": "black",
  																																																									"level": "green",
  																																																									"male": 23,
  																																																									"female": 17,

  																																																									"children": [{
  																																																											"name": "Top Management",
  																																																											"value": 3,
  																																																											"type": "grey",
  																																																											"level": "red",
  																																																											"male": 3,
  																																																											"female": 0,

  																																																											"children": [{
  																																																													"name": "Operation Manager",
  																																																													"value": 1,
  																																																													"type": "steelblue",
  																																																													"level": "orange",
  																																																													"male": 1,
  																																																													"female": 0,

  																																																												},
  																																																												{
  																																																													"name": "Account Strategist",
  																																																													"value": 1,
  																																																													"type": "steelblue",
  																																																													"level": "red",
  																																																													"male": 1,
  																																																													"female": 0,

  																																																												},

  																																																											]
  																																																										},
  																																																										{
  																																																											"name": "Junior Level",
  																																																											"value": 23,
  																																																											"type": "grey",
  																																																											"level": "green",
  																																																											"male": 10,
  																																																											"female": 13,

  																																																											"children": [{
  																																																													"name": "Analyst",
  																																																													"value": 10,
  																																																													"type": "steelblue",
  																																																													"level": "orange",
  																																																													"male": 7,
  																																																													"female": 3,

  																																																													"children": [{
  																																																															"name": "Top Management",
  																																																															"value": 2,
  																																																															"type": "black",
  																																																															"level": "red",
  																																																															"male": 2,
  																																																															"female": 0,

  																																																															"children": [{
  																																																																	"name": "Director",
  																																																																	"value": 1,
  																																																																	"type": "black",
  																																																																	"level": "red",
  																																																																	"male": 1,
  																																																																	"female": 0,

  																																																																},
  																																																																{
  																																																																	"name": "HR Manager",
  																																																																	"value": 1,
  																																																																	"type": "black",
  																																																																	"level": "red",
  																																																																	"male": 1,
  																																																																	"female": 0,

  																																																																}
  																																																															]
  																																																														},
  																																																														{
  																																																															"name": "Middle Management",
  																																																															"value": 1,
  																																																															"type": "black",
  																																																															"level": "red",
  																																																															"male": 0,
  																																																															"female": 1,
  																																																															"children": [{
  																																																																"name": "Front Office Executive",
  																																																																"value": 1,
  																																																																"type": "black",
  																																																																"level": "red",
  																																																																"male": 0,
  																																																																"female": 1,

  																																																															}]
  																																																														}
  																																																													]

  																																																												},
  																																																												{
  																																																													"name": "Intern",
  																																																													"value": 5,
  																																																													"type": "steelblue",
  																																																													"level": "red",
  																																																													"male": 0,
  																																																													"female": 5,

  																																																												},

  																																																											]
  																																																										},

  																																																									]
  																																																								},
  																																																								{
  																																																									"name": "Technology",
  																																																									"value": 32,
  																																																									"type": "black",
  																																																									"level": "red",
  																																																									"male": 26,
  																																																									"female": 6,
  																																																									"children": [{
  																																																											"name": "Top Management",
  																																																											"value": 6,
  																																																											"type": "grey",
  																																																											"level": "red",
  																																																											"male": 6,
  																																																											"female": 0,
  																																																											"children": [{
  																																																													"name": "Engineering Manager",
  																																																													"value": 1,
  																																																													"type": "grey",
  																																																													"level": "red",
  																																																													"male": 1,
  																																																													"female": 0,

  																																																												},
  																																																												{
  																																																													"name": "Product Manager",
  																																																													"value": 1,
  																																																													"type": "grey",
  																																																													"level": "red",
  																																																													"male": 1,
  																																																													"female": 0,

  																																																												},

  																																																											]
  																																																										},
  																																																										{
  																																																											"name": "Junior Level",
  																																																											"value": 21,
  																																																											"type": "grey",
  																																																											"level": "red",
  																																																											"male": 16,
  																																																											"female": 5,
  																																																											"children": [{
  																																																													"name": "System Administrator",
  																																																													"value": 1,
  																																																													"type": "grey",
  																																																													"level": "red",
  																																																													"male": 1,
  																																																													"female": 0,

  																																																												},
  																																																												{
  																																																													"name": "Support Engineer",
  																																																													"value": 1,
  																																																													"type": "grey",
  																																																													"level": "red",
  																																																													"male": 1,
  																																																													"female": 0,

  																																																												},

  																																																											]
  																																																										},

  																																																									]
  																																																								},

  																																																							]
  																																																						},

  																																																					]
  																																																				},

  																																																			]
  																																																		},

  																																																	]

  																																																},
  																																																{
  																																																	"name": "Support Engineer",
  																																																	"value": 1,
  																																																	"type": "grey",
  																																																	"level": "red",
  																																																	"male": 1,
  																																																	"female": 0,
  																																																	"children": [{
  																																																			"name": "Operation",
  																																																			"value": 40,
  																																																			"type": "black",
  																																																			"level": "green",
  																																																			"male": 23,
  																																																			"female": 17,

  																																																			"children": [{
  																																																					"name": "Top Management",
  																																																					"value": 3,
  																																																					"type": "grey",
  																																																					"level": "red",
  																																																					"male": 3,
  																																																					"female": 0,

  																																																					"children": [{
  																																																							"name": "Operation Manager",
  																																																							"value": 1,
  																																																							"type": "steelblue",
  																																																							"level": "orange",
  																																																							"male": 1,
  																																																							"female": 0,

  																																																						},
  																																																						{
  																																																							"name": "Account Strategist",
  																																																							"value": 1,
  																																																							"type": "steelblue",
  																																																							"level": "red",
  																																																							"male": 1,
  																																																							"female": 0,

  																																																						},

  																																																					]
  																																																				},
  																																																				{
  																																																					"name": "Junior Level",
  																																																					"value": 23,
  																																																					"type": "grey",
  																																																					"level": "green",
  																																																					"male": 10,
  																																																					"female": 13,

  																																																					"children": [{
  																																																							"name": "Analyst",
  																																																							"value": 10,
  																																																							"type": "steelblue",
  																																																							"level": "orange",
  																																																							"male": 7,
  																																																							"female": 3,

  																																																							"children": [{
  																																																									"name": "Top Management",
  																																																									"value": 2,
  																																																									"type": "black",
  																																																									"level": "red",
  																																																									"male": 2,
  																																																									"female": 0,

  																																																									"children": [{
  																																																											"name": "Director",
  																																																											"value": 1,
  																																																											"type": "black",
  																																																											"level": "red",
  																																																											"male": 1,
  																																																											"female": 0,

  																																																										},
  																																																										{
  																																																											"name": "HR Manager",
  																																																											"value": 1,
  																																																											"type": "black",
  																																																											"level": "red",
  																																																											"male": 1,
  																																																											"female": 0,

  																																																										}
  																																																									]
  																																																								},
  																																																								{
  																																																									"name": "Middle Management",
  																																																									"value": 1,
  																																																									"type": "black",
  																																																									"level": "red",
  																																																									"male": 0,
  																																																									"female": 1,
  																																																									"children": [{
  																																																										"name": "Front Office Executive",
  																																																										"value": 1,
  																																																										"type": "black",
  																																																										"level": "red",
  																																																										"male": 0,
  																																																										"female": 1,
  																																																										"children": [{
  																																																												"name": "Operation",
  																																																												"value": 40,
  																																																												"type": "black",
  																																																												"level": "green",
  																																																												"male": 23,
  																																																												"female": 17,

  																																																												"children": [{
  																																																														"name": "Top Management",
  																																																														"value": 3,
  																																																														"type": "grey",
  																																																														"level": "red",
  																																																														"male": 3,
  																																																														"female": 0,

  																																																														"children": [{
  																																																																"name": "Operation Manager",
  																																																																"value": 1,
  																																																																"type": "steelblue",
  																																																																"level": "orange",
  																																																																"male": 1,
  																																																																"female": 0,

  																																																															},
  																																																															{
  																																																																"name": "Account Strategist",
  																																																																"value": 1,
  																																																																"type": "steelblue",
  																																																																"level": "red",
  																																																																"male": 1,
  																																																																"female": 0,

  																																																															},

  																																																														]
  																																																													},
  																																																													{
  																																																														"name": "Junior Level",
  																																																														"value": 23,
  																																																														"type": "grey",
  																																																														"level": "green",
  																																																														"male": 10,
  																																																														"female": 13,

  																																																														"children": [{
  																																																																"name": "Analyst",
  																																																																"value": 10,
  																																																																"type": "steelblue",
  																																																																"level": "orange",
  																																																																"male": 7,
  																																																																"female": 3,

  																																																																"children": [{
  																																																																		"name": "Top Management",
  																																																																		"value": 2,
  																																																																		"type": "black",
  																																																																		"level": "red",
  																																																																		"male": 2,
  																																																																		"female": 0,

  																																																																		"children": [{
  																																																																				"name": "Director",
  																																																																				"value": 1,
  																																																																				"type": "black",
  																																																																				"level": "red",
  																																																																				"male": 1,
  																																																																				"female": 0,

  																																																																			},
  																																																																			{
  																																																																				"name": "HR Manager",
  																																																																				"value": 1,
  																																																																				"type": "black",
  																																																																				"level": "red",
  																																																																				"male": 1,
  																																																																				"female": 0,

  																																																																			}
  																																																																		]
  																																																																	},
  																																																																	{
  																																																																		"name": "Middle Management",
  																																																																		"value": 1,
  																																																																		"type": "black",
  																																																																		"level": "red",
  																																																																		"male": 0,
  																																																																		"female": 1,
  																																																																		"children": [{
  																																																																			"name": "Front Office Executive",
  																																																																			"value": 1,
  																																																																			"type": "black",
  																																																																			"level": "red",
  																																																																			"male": 0,
  																																																																			"female": 1,

  																																																																		}]
  																																																																	}
  																																																																]

  																																																															},
  																																																															{
  																																																																"name": "Intern",
  																																																																"value": 5,
  																																																																"type": "steelblue",
  																																																																"level": "red",
  																																																																"male": 0,
  																																																																"female": 5,

  																																																															},

  																																																														]
  																																																													},

  																																																												]
  																																																											},
  																																																											{
  																																																												"name": "Technology",
  																																																												"value": 32,
  																																																												"type": "black",
  																																																												"level": "red",
  																																																												"male": 26,
  																																																												"female": 6,
  																																																												"children": [{
  																																																														"name": "Top Management",
  																																																														"value": 6,
  																																																														"type": "grey",
  																																																														"level": "red",
  																																																														"male": 6,
  																																																														"female": 0,
  																																																														"children": [{
  																																																																"name": "Engineering Manager",
  																																																																"value": 1,
  																																																																"type": "grey",
  																																																																"level": "red",
  																																																																"male": 1,
  																																																																"female": 0,

  																																																															},
  																																																															{
  																																																																"name": "Product Manager",
  																																																																"value": 1,
  																																																																"type": "grey",
  																																																																"level": "red",
  																																																																"male": 1,
  																																																																"female": 0,

  																																																															},

  																																																														]
  																																																													},
  																																																													{
  																																																														"name": "Junior Level",
  																																																														"value": 21,
  																																																														"type": "grey",
  																																																														"level": "red",
  																																																														"male": 16,
  																																																														"female": 5,
  																																																														"children": [{
  																																																																"name": "System Administrator",
  																																																																"value": 1,
  																																																																"type": "grey",
  																																																																"level": "red",
  																																																																"male": 1,
  																																																																"female": 0,

  																																																															},
  																																																															{
  																																																																"name": "Support Engineer",
  																																																																"value": 1,
  																																																																"type": "grey",
  																																																																"level": "red",
  																																																																"male": 1,
  																																																																"female": 0,

  																																																															},

  																																																														]
  																																																													},

  																																																												]
  																																																											},

  																																																										]
  																																																									}]
  																																																								}
  																																																							]

  																																																						},
  																																																						{
  																																																							"name": "Intern",
  																																																							"value": 5,
  																																																							"type": "steelblue",
  																																																							"level": "red",
  																																																							"male": 0,
  																																																							"female": 5,

  																																																						},

  																																																					]
  																																																				},

  																																																			]
  																																																		},
  																																																		{
  																																																			"name": "Technology",
  																																																			"value": 32,
  																																																			"type": "black",
  																																																			"level": "red",
  																																																			"male": 26,
  																																																			"female": 6,
  																																																			"children": [{
  																																																					"name": "Top Management",
  																																																					"value": 6,
  																																																					"type": "grey",
  																																																					"level": "red",
  																																																					"male": 6,
  																																																					"female": 0,
  																																																					"children": [{
  																																																							"name": "Engineering Manager",
  																																																							"value": 1,
  																																																							"type": "grey",
  																																																							"level": "red",
  																																																							"male": 1,
  																																																							"female": 0,

  																																																						},
  																																																						{
  																																																							"name": "Product Manager",
  																																																							"value": 1,
  																																																							"type": "grey",
  																																																							"level": "red",
  																																																							"male": 1,
  																																																							"female": 0,

  																																																						},

  																																																					]
  																																																				},
  																																																				{
  																																																					"name": "Junior Level",
  																																																					"value": 21,
  																																																					"type": "grey",
  																																																					"level": "red",
  																																																					"male": 16,
  																																																					"female": 5,
  																																																					"children": [{
  																																																							"name": "System Administrator",
  																																																							"value": 1,
  																																																							"type": "grey",
  																																																							"level": "red",
  																																																							"male": 1,
  																																																							"female": 0,
  																																																							"children": [{
  																																																									"name": "Operation",
  																																																									"value": 40,
  																																																									"type": "black",
  																																																									"level": "green",
  																																																									"male": 23,
  																																																									"female": 17,

  																																																									"children": [{
  																																																											"name": "Top Management",
  																																																											"value": 3,
  																																																											"type": "grey",
  																																																											"level": "red",
  																																																											"male": 3,
  																																																											"female": 0,

  																																																											"children": [{
  																																																													"name": "Operation Manager",
  																																																													"value": 1,
  																																																													"type": "steelblue",
  																																																													"level": "orange",
  																																																													"male": 1,
  																																																													"female": 0,

  																																																												},
  																																																												{
  																																																													"name": "Account Strategist",
  																																																													"value": 1,
  																																																													"type": "steelblue",
  																																																													"level": "red",
  																																																													"male": 1,
  																																																													"female": 0,

  																																																												},

  																																																											]
  																																																										},
  																																																										{
  																																																											"name": "Junior Level",
  																																																											"value": 23,
  																																																											"type": "grey",
  																																																											"level": "green",
  																																																											"male": 10,
  																																																											"female": 13,

  																																																											"children": [{
  																																																													"name": "Analyst",
  																																																													"value": 10,
  																																																													"type": "steelblue",
  																																																													"level": "orange",
  																																																													"male": 7,
  																																																													"female": 3,

  																																																													"children": [{
  																																																															"name": "Top Management",
  																																																															"value": 2,
  																																																															"type": "black",
  																																																															"level": "red",
  																																																															"male": 2,
  																																																															"female": 0,

  																																																															"children": [{
  																																																																	"name": "Director",
  																																																																	"value": 1,
  																																																																	"type": "black",
  																																																																	"level": "red",
  																																																																	"male": 1,
  																																																																	"female": 0,

  																																																																},
  																																																																{
  																																																																	"name": "HR Manager",
  																																																																	"value": 1,
  																																																																	"type": "black",
  																																																																	"level": "red",
  																																																																	"male": 1,
  																																																																	"female": 0,

  																																																																}
  																																																															]
  																																																														},
  																																																														{
  																																																															"name": "Middle Management",
  																																																															"value": 1,
  																																																															"type": "black",
  																																																															"level": "red",
  																																																															"male": 0,
  																																																															"female": 1,
  																																																															"children": [{
  																																																																"name": "Front Office Executive",
  																																																																"value": 1,
  																																																																"type": "black",
  																																																																"level": "red",
  																																																																"male": 0,
  																																																																"female": 1,

  																																																															}]
  																																																														}
  																																																													]

  																																																												},
  																																																												{
  																																																													"name": "Intern",
  																																																													"value": 5,
  																																																													"type": "steelblue",
  																																																													"level": "red",
  																																																													"male": 0,
  																																																													"female": 5,

  																																																												},

  																																																											]
  																																																										},

  																																																									]
  																																																								},
  																																																								{
  																																																									"name": "Technology",
  																																																									"value": 32,
  																																																									"type": "black",
  																																																									"level": "red",
  																																																									"male": 26,
  																																																									"female": 6,
  																																																									"children": [{
  																																																											"name": "Top Management",
  																																																											"value": 6,
  																																																											"type": "grey",
  																																																											"level": "red",
  																																																											"male": 6,
  																																																											"female": 0,
  																																																											"children": [{
  																																																													"name": "Engineering Manager",
  																																																													"value": 1,
  																																																													"type": "grey",
  																																																													"level": "red",
  																																																													"male": 1,
  																																																													"female": 0,

  																																																												},
  																																																												{
  																																																													"name": "Product Manager",
  																																																													"value": 1,
  																																																													"type": "grey",
  																																																													"level": "red",
  																																																													"male": 1,
  																																																													"female": 0,

  																																																												},

  																																																											]
  																																																										},
  																																																										{
  																																																											"name": "Junior Level",
  																																																											"value": 21,
  																																																											"type": "grey",
  																																																											"level": "red",
  																																																											"male": 16,
  																																																											"female": 5,
  																																																											"children": [{
  																																																													"name": "System Administrator",
  																																																													"value": 1,
  																																																													"type": "grey",
  																																																													"level": "red",
  																																																													"male": 1,
  																																																													"female": 0,

  																																																												},
  																																																												{
  																																																													"name": "Support Engineer",
  																																																													"value": 1,
  																																																													"type": "grey",
  																																																													"level": "red",
  																																																													"male": 1,
  																																																													"female": 0,
  																																																													"children": [{
  																																																															"name": "Operation",
  																																																															"value": 40,
  																																																															"type": "black",
  																																																															"level": "green",
  																																																															"male": 23,
  																																																															"female": 17,

  																																																															"children": [{
  																																																																	"name": "Top Management",
  																																																																	"value": 3,
  																																																																	"type": "grey",
  																																																																	"level": "red",
  																																																																	"male": 3,
  																																																																	"female": 0,

  																																																																	"children": [{
  																																																																			"name": "Operation Manager",
  																																																																			"value": 1,
  																																																																			"type": "steelblue",
  																																																																			"level": "orange",
  																																																																			"male": 1,
  																																																																			"female": 0,

  																																																																		},
  																																																																		{
  																																																																			"name": "Account Strategist",
  																																																																			"value": 1,
  																																																																			"type": "steelblue",
  																																																																			"level": "red",
  																																																																			"male": 1,
  																																																																			"female": 0,

  																																																																		},

  																																																																	]
  																																																																},
  																																																																{
  																																																																	"name": "Junior Level",
  																																																																	"value": 23,
  																																																																	"type": "grey",
  																																																																	"level": "green",
  																																																																	"male": 10,
  																																																																	"female": 13,

  																																																																	"children": [{
  																																																																			"name": "Analyst",
  																																																																			"value": 10,
  																																																																			"type": "steelblue",
  																																																																			"level": "orange",
  																																																																			"male": 7,
  																																																																			"female": 3,

  																																																																			"children": [{
  																																																																					"name": "Top Management",
  																																																																					"value": 2,
  																																																																					"type": "black",
  																																																																					"level": "red",
  																																																																					"male": 2,
  																																																																					"female": 0,

  																																																																					"children": [{
  																																																																							"name": "Director",
  																																																																							"value": 1,
  																																																																							"type": "black",
  																																																																							"level": "red",
  																																																																							"male": 1,
  																																																																							"female": 0,

  																																																																						},
  																																																																						{
  																																																																							"name": "HR Manager",
  																																																																							"value": 1,
  																																																																							"type": "black",
  																																																																							"level": "red",
  																																																																							"male": 1,
  																																																																							"female": 0,

  																																																																						}
  																																																																					]
  																																																																				},
  																																																																				{
  																																																																					"name": "Middle Management",
  																																																																					"value": 1,
  																																																																					"type": "black",
  																																																																					"level": "red",
  																																																																					"male": 0,
  																																																																					"female": 1,
  																																																																					"children": [{
  																																																																						"name": "Front Office Executive",
  																																																																						"value": 1,
  																																																																						"type": "black",
  																																																																						"level": "red",
  																																																																						"male": 0,
  																																																																						"female": 1,

  																																																																					}]
  																																																																				}
  																																																																			]

  																																																																		},
  																																																																		{
  																																																																			"name": "Intern",
  																																																																			"value": 5,
  																																																																			"type": "steelblue",
  																																																																			"level": "red",
  																																																																			"male": 0,
  																																																																			"female": 5,

  																																																																		},

  																																																																	]
  																																																																},

  																																																															]
  																																																														},
  																																																														{
  																																																															"name": "Technology",
  																																																															"value": 32,
  																																																															"type": "black",
  																																																															"level": "red",
  																																																															"male": 26,
  																																																															"female": 6,
  																																																															"children": [{
  																																																																	"name": "Top Management",
  																																																																	"value": 6,
  																																																																	"type": "grey",
  																																																																	"level": "red",
  																																																																	"male": 6,
  																																																																	"female": 0,
  																																																																	"children": [{
  																																																																			"name": "Engineering Manager",
  																																																																			"value": 1,
  																																																																			"type": "grey",
  																																																																			"level": "red",
  																																																																			"male": 1,
  																																																																			"female": 0,

  																																																																		},
  																																																																		{
  																																																																			"name": "Product Manager",
  																																																																			"value": 1,
  																																																																			"type": "grey",
  																																																																			"level": "red",
  																																																																			"male": 1,
  																																																																			"female": 0,

  																																																																		},

  																																																																	]
  																																																																},
  																																																																{
  																																																																	"name": "Junior Level",
  																																																																	"value": 21,
  																																																																	"type": "grey",
  																																																																	"level": "red",
  																																																																	"male": 16,
  																																																																	"female": 5,
  																																																																	"children": [{
  																																																																			"name": "System Administrator",
  																																																																			"value": 1,
  																																																																			"type": "grey",
  																																																																			"level": "red",
  																																																																			"male": 1,
  																																																																			"female": 0,

  																																																																		},
  																																																																		{
  																																																																			"name": "Support Engineer",
  																																																																			"value": 1,
  																																																																			"type": "grey",
  																																																																			"level": "red",
  																																																																			"male": 1,
  																																																																			"female": 0,

  																																																																		},

  																																																																	]
  																																																																},

  																																																															]
  																																																														},

  																																																													]
  																																																												},

  																																																											]
  																																																										},

  																																																									]
  																																																								},

  																																																							]

  																																																						},
  																																																						{
  																																																							"name": "Support Engineer",
  																																																							"value": 1,
  																																																							"type": "grey",
  																																																							"level": "red",
  																																																							"male": 1,
  																																																							"female": 0,
  																																																							"children": [{
  																																																									"name": "Operation",
  																																																									"value": 40,
  																																																									"type": "black",
  																																																									"level": "green",
  																																																									"male": 23,
  																																																									"female": 17,

  																																																									"children": [{
  																																																											"name": "Top Management",
  																																																											"value": 3,
  																																																											"type": "grey",
  																																																											"level": "red",
  																																																											"male": 3,
  																																																											"female": 0,

  																																																											"children": [{
  																																																													"name": "Operation Manager",
  																																																													"value": 1,
  																																																													"type": "steelblue",
  																																																													"level": "orange",
  																																																													"male": 1,
  																																																													"female": 0,

  																																																												},
  																																																												{
  																																																													"name": "Account Strategist",
  																																																													"value": 1,
  																																																													"type": "steelblue",
  																																																													"level": "red",
  																																																													"male": 1,
  																																																													"female": 0,

  																																																												},

  																																																											]
  																																																										},
  																																																										{
  																																																											"name": "Junior Level",
  																																																											"value": 23,
  																																																											"type": "grey",
  																																																											"level": "green",
  																																																											"male": 10,
  																																																											"female": 13,

  																																																											"children": [{
  																																																													"name": "Analyst",
  																																																													"value": 10,
  																																																													"type": "steelblue",
  																																																													"level": "orange",
  																																																													"male": 7,
  																																																													"female": 3,

  																																																													"children": [{
  																																																															"name": "Top Management",
  																																																															"value": 2,
  																																																															"type": "black",
  																																																															"level": "red",
  																																																															"male": 2,
  																																																															"female": 0,

  																																																															"children": [{
  																																																																	"name": "Director",
  																																																																	"value": 1,
  																																																																	"type": "black",
  																																																																	"level": "red",
  																																																																	"male": 1,
  																																																																	"female": 0,

  																																																																},
  																																																																{
  																																																																	"name": "HR Manager",
  																																																																	"value": 1,
  																																																																	"type": "black",
  																																																																	"level": "red",
  																																																																	"male": 1,
  																																																																	"female": 0,

  																																																																}
  																																																															]
  																																																														},
  																																																														{
  																																																															"name": "Middle Management",
  																																																															"value": 1,
  																																																															"type": "black",
  																																																															"level": "red",
  																																																															"male": 0,
  																																																															"female": 1,
  																																																															"children": [{
  																																																																"name": "Front Office Executive",
  																																																																"value": 1,
  																																																																"type": "black",
  																																																																"level": "red",
  																																																																"male": 0,
  																																																																"female": 1,
  																																																																"children": [{
  																																																																		"name": "Operation",
  																																																																		"value": 40,
  																																																																		"type": "black",
  																																																																		"level": "green",
  																																																																		"male": 23,
  																																																																		"female": 17,

  																																																																		"children": [{
  																																																																				"name": "Top Management",
  																																																																				"value": 3,
  																																																																				"type": "grey",
  																																																																				"level": "red",
  																																																																				"male": 3,
  																																																																				"female": 0,

  																																																																				"children": [{
  																																																																						"name": "Operation Manager",
  																																																																						"value": 1,
  																																																																						"type": "steelblue",
  																																																																						"level": "orange",
  																																																																						"male": 1,
  																																																																						"female": 0,

  																																																																					},
  																																																																					{
  																																																																						"name": "Account Strategist",
  																																																																						"value": 1,
  																																																																						"type": "steelblue",
  																																																																						"level": "red",
  																																																																						"male": 1,
  																																																																						"female": 0,

  																																																																					},

  																																																																				]
  																																																																			},
  																																																																			{
  																																																																				"name": "Junior Level",
  																																																																				"value": 23,
  																																																																				"type": "grey",
  																																																																				"level": "green",
  																																																																				"male": 10,
  																																																																				"female": 13,

  																																																																				"children": [{
  																																																																						"name": "Analyst",
  																																																																						"value": 10,
  																																																																						"type": "steelblue",
  																																																																						"level": "orange",
  																																																																						"male": 7,
  																																																																						"female": 3,

  																																																																						"children": [{
  																																																																								"name": "Top Management",
  																																																																								"value": 2,
  																																																																								"type": "black",
  																																																																								"level": "red",
  																																																																								"male": 2,
  																																																																								"female": 0,

  																																																																								"children": [{
  																																																																										"name": "Director",
  																																																																										"value": 1,
  																																																																										"type": "black",
  																																																																										"level": "red",
  																																																																										"male": 1,
  																																																																										"female": 0,

  																																																																									},
  																																																																									{
  																																																																										"name": "HR Manager",
  																																																																										"value": 1,
  																																																																										"type": "black",
  																																																																										"level": "red",
  																																																																										"male": 1,
  																																																																										"female": 0,

  																																																																									}
  																																																																								]
  																																																																							},
  																																																																							{
  																																																																								"name": "Middle Management",
  																																																																								"value": 1,
  																																																																								"type": "black",
  																																																																								"level": "red",
  																																																																								"male": 0,
  																																																																								"female": 1,
  																																																																								"children": [{
  																																																																									"name": "Front Office Executive",
  																																																																									"value": 1,
  																																																																									"type": "black",
  																																																																									"level": "red",
  																																																																									"male": 0,
  																																																																									"female": 1,

  																																																																								}]
  																																																																							}
  																																																																						]

  																																																																					},
  																																																																					{
  																																																																						"name": "Intern",
  																																																																						"value": 5,
  																																																																						"type": "steelblue",
  																																																																						"level": "red",
  																																																																						"male": 0,
  																																																																						"female": 5,

  																																																																					},

  																																																																				]
  																																																																			},

  																																																																		]
  																																																																	},
  																																																																	{
  																																																																		"name": "Technology",
  																																																																		"value": 32,
  																																																																		"type": "black",
  																																																																		"level": "red",
  																																																																		"male": 26,
  																																																																		"female": 6,
  																																																																		"children": [{
  																																																																				"name": "Top Management",
  																																																																				"value": 6,
  																																																																				"type": "grey",
  																																																																				"level": "red",
  																																																																				"male": 6,
  																																																																				"female": 0,
  																																																																				"children": [{
  																																																																						"name": "Engineering Manager",
  																																																																						"value": 1,
  																																																																						"type": "grey",
  																																																																						"level": "red",
  																																																																						"male": 1,
  																																																																						"female": 0,

  																																																																					},
  																																																																					{
  																																																																						"name": "Product Manager",
  																																																																						"value": 1,
  																																																																						"type": "grey",
  																																																																						"level": "red",
  																																																																						"male": 1,
  																																																																						"female": 0,

  																																																																					},

  																																																																				]
  																																																																			},
  																																																																			{
  																																																																				"name": "Junior Level",
  																																																																				"value": 21,
  																																																																				"type": "grey",
  																																																																				"level": "red",
  																																																																				"male": 16,
  																																																																				"female": 5,
  																																																																				"children": [{
  																																																																						"name": "System Administrator",
  																																																																						"value": 1,
  																																																																						"type": "grey",
  																																																																						"level": "red",
  																																																																						"male": 1,
  																																																																						"female": 0,

  																																																																					},
  																																																																					{
  																																																																						"name": "Support Engineer",
  																																																																						"value": 1,
  																																																																						"type": "grey",
  																																																																						"level": "red",
  																																																																						"male": 1,
  																																																																						"female": 0,

  																																																																					},

  																																																																				]
  																																																																			},

  																																																																		]
  																																																																	},

  																																																																]
  																																																															}]
  																																																														}
  																																																													]

  																																																												},
  																																																												{
  																																																													"name": "Intern",
  																																																													"value": 5,
  																																																													"type": "steelblue",
  																																																													"level": "red",
  																																																													"male": 0,
  																																																													"female": 5,

  																																																												},

  																																																											]
  																																																										},

  																																																									]
  																																																								},
  																																																								{
  																																																									"name": "Technology",
  																																																									"value": 32,
  																																																									"type": "black",
  																																																									"level": "red",
  																																																									"male": 26,
  																																																									"female": 6,
  																																																									"children": [{
  																																																											"name": "Top Management",
  																																																											"value": 6,
  																																																											"type": "grey",
  																																																											"level": "red",
  																																																											"male": 6,
  																																																											"female": 0,
  																																																											"children": [{
  																																																													"name": "Engineering Manager",
  																																																													"value": 1,
  																																																													"type": "grey",
  																																																													"level": "red",
  																																																													"male": 1,
  																																																													"female": 0,

  																																																												},
  																																																												{
  																																																													"name": "Product Manager",
  																																																													"value": 1,
  																																																													"type": "grey",
  																																																													"level": "red",
  																																																													"male": 1,
  																																																													"female": 0,

  																																																												},

  																																																											]
  																																																										},
  																																																										{
  																																																											"name": "Junior Level",
  																																																											"value": 21,
  																																																											"type": "grey",
  																																																											"level": "red",
  																																																											"male": 16,
  																																																											"female": 5,
  																																																											"children": [{
  																																																													"name": "System Administrator",
  																																																													"value": 1,
  																																																													"type": "grey",
  																																																													"level": "red",
  																																																													"male": 1,
  																																																													"female": 0,
  																																																													"children": [{
  																																																															"name": "Operation",
  																																																															"value": 40,
  																																																															"type": "black",
  																																																															"level": "green",
  																																																															"male": 23,
  																																																															"female": 17,

  																																																															"children": [{
  																																																																	"name": "Top Management",
  																																																																	"value": 3,
  																																																																	"type": "grey",
  																																																																	"level": "red",
  																																																																	"male": 3,
  																																																																	"female": 0,

  																																																																	"children": [{
  																																																																			"name": "Operation Manager",
  																																																																			"value": 1,
  																																																																			"type": "steelblue",
  																																																																			"level": "orange",
  																																																																			"male": 1,
  																																																																			"female": 0,

  																																																																		},
  																																																																		{
  																																																																			"name": "Account Strategist",
  																																																																			"value": 1,
  																																																																			"type": "steelblue",
  																																																																			"level": "red",
  																																																																			"male": 1,
  																																																																			"female": 0,

  																																																																		},

  																																																																	]
  																																																																},
  																																																																{
  																																																																	"name": "Junior Level",
  																																																																	"value": 23,
  																																																																	"type": "grey",
  																																																																	"level": "green",
  																																																																	"male": 10,
  																																																																	"female": 13,

  																																																																	"children": [{
  																																																																			"name": "Analyst",
  																																																																			"value": 10,
  																																																																			"type": "steelblue",
  																																																																			"level": "orange",
  																																																																			"male": 7,
  																																																																			"female": 3,

  																																																																			"children": [{
  																																																																					"name": "Top Management",
  																																																																					"value": 2,
  																																																																					"type": "black",
  																																																																					"level": "red",
  																																																																					"male": 2,
  																																																																					"female": 0,

  																																																																					"children": [{
  																																																																							"name": "Director",
  																																																																							"value": 1,
  																																																																							"type": "black",
  																																																																							"level": "red",
  																																																																							"male": 1,
  																																																																							"female": 0,

  																																																																						},
  																																																																						{
  																																																																							"name": "HR Manager",
  																																																																							"value": 1,
  																																																																							"type": "black",
  																																																																							"level": "red",
  																																																																							"male": 1,
  																																																																							"female": 0,

  																																																																						}
  																																																																					]
  																																																																				},
  																																																																				{
  																																																																					"name": "Middle Management",
  																																																																					"value": 1,
  																																																																					"type": "black",
  																																																																					"level": "red",
  																																																																					"male": 0,
  																																																																					"female": 1,
  																																																																					"children": [{
  																																																																						"name": "Front Office Executive",
  																																																																						"value": 1,
  																																																																						"type": "black",
  																																																																						"level": "red",
  																																																																						"male": 0,
  																																																																						"female": 1,

  																																																																					}]
  																																																																				}
  																																																																			]

  																																																																		},
  																																																																		{
  																																																																			"name": "Intern",
  																																																																			"value": 5,
  																																																																			"type": "steelblue",
  																																																																			"level": "red",
  																																																																			"male": 0,
  																																																																			"female": 5,

  																																																																		},

  																																																																	]
  																																																																},

  																																																															]
  																																																														},
  																																																														{
  																																																															"name": "Technology",
  																																																															"value": 32,
  																																																															"type": "black",
  																																																															"level": "red",
  																																																															"male": 26,
  																																																															"female": 6,
  																																																															"children": [{
  																																																																	"name": "Top Management",
  																																																																	"value": 6,
  																																																																	"type": "grey",
  																																																																	"level": "red",
  																																																																	"male": 6,
  																																																																	"female": 0,
  																																																																	"children": [{
  																																																																			"name": "Engineering Manager",
  																																																																			"value": 1,
  																																																																			"type": "grey",
  																																																																			"level": "red",
  																																																																			"male": 1,
  																																																																			"female": 0,

  																																																																		},
  																																																																		{
  																																																																			"name": "Product Manager",
  																																																																			"value": 1,
  																																																																			"type": "grey",
  																																																																			"level": "red",
  																																																																			"male": 1,
  																																																																			"female": 0,

  																																																																		},

  																																																																	]
  																																																																},
  																																																																{
  																																																																	"name": "Junior Level",
  																																																																	"value": 21,
  																																																																	"type": "grey",
  																																																																	"level": "red",
  																																																																	"male": 16,
  																																																																	"female": 5,
  																																																																	"children": [{
  																																																																			"name": "System Administrator",
  																																																																			"value": 1,
  																																																																			"type": "grey",
  																																																																			"level": "red",
  																																																																			"male": 1,
  																																																																			"female": 0,

  																																																																		},
  																																																																		{
  																																																																			"name": "Support Engineer",
  																																																																			"value": 1,
  																																																																			"type": "grey",
  																																																																			"level": "red",
  																																																																			"male": 1,
  																																																																			"female": 0,
  																																																																			"children": [{
  																																																																					"name": "Operation",
  																																																																					"value": 40,
  																																																																					"type": "black",
  																																																																					"level": "green",
  																																																																					"male": 23,
  																																																																					"female": 17,

  																																																																					"children": [{
  																																																																							"name": "Top Management",
  																																																																							"value": 3,
  																																																																							"type": "grey",
  																																																																							"level": "red",
  																																																																							"male": 3,
  																																																																							"female": 0,

  																																																																							"children": [{
  																																																																									"name": "Operation Manager",
  																																																																									"value": 1,
  																																																																									"type": "steelblue",
  																																																																									"level": "orange",
  																																																																									"male": 1,
  																																																																									"female": 0,

  																																																																								},
  																																																																								{
  																																																																									"name": "Account Strategist",
  																																																																									"value": 1,
  																																																																									"type": "steelblue",
  																																																																									"level": "red",
  																																																																									"male": 1,
  																																																																									"female": 0,

  																																																																								},

  																																																																							]
  																																																																						},
  																																																																						{
  																																																																							"name": "Junior Level",
  																																																																							"value": 23,
  																																																																							"type": "grey",
  																																																																							"level": "green",
  																																																																							"male": 10,
  																																																																							"female": 13,

  																																																																							"children": [{
  																																																																									"name": "Analyst",
  																																																																									"value": 10,
  																																																																									"type": "steelblue",
  																																																																									"level": "orange",
  																																																																									"male": 7,
  																																																																									"female": 3,

  																																																																									"children": [{
  																																																																											"name": "Top Management",
  																																																																											"value": 2,
  																																																																											"type": "black",
  																																																																											"level": "red",
  																																																																											"male": 2,
  																																																																											"female": 0,

  																																																																											"children": [{
  																																																																													"name": "Director",
  																																																																													"value": 1,
  																																																																													"type": "black",
  																																																																													"level": "red",
  																																																																													"male": 1,
  																																																																													"female": 0,

  																																																																												},
  																																																																												{
  																																																																													"name": "HR Manager",
  																																																																													"value": 1,
  																																																																													"type": "black",
  																																																																													"level": "red",
  																																																																													"male": 1,
  																																																																													"female": 0,

  																																																																												}
  																																																																											]
  																																																																										},
  																																																																										{
  																																																																											"name": "Middle Management",
  																																																																											"value": 1,
  																																																																											"type": "black",
  																																																																											"level": "red",
  																																																																											"male": 0,
  																																																																											"female": 1,
  																																																																											"children": [{
  																																																																												"name": "Front Office Executive",
  																																																																												"value": 1,
  																																																																												"type": "black",
  																																																																												"level": "red",
  																																																																												"male": 0,
  																																																																												"female": 1,

  																																																																											}]
  																																																																										}
  																																																																									]

  																																																																								},
  																																																																								{
  																																																																									"name": "Intern",
  																																																																									"value": 5,
  																																																																									"type": "steelblue",
  																																																																									"level": "red",
  																																																																									"male": 0,
  																																																																									"female": 5,

  																																																																								},

  																																																																							]
  																																																																						},

  																																																																					]
  																																																																				},
  																																																																				{
  																																																																					"name": "Technology",
  																																																																					"value": 32,
  																																																																					"type": "black",
  																																																																					"level": "red",
  																																																																					"male": 26,
  																																																																					"female": 6,
  																																																																					"children": [{
  																																																																							"name": "Top Management",
  																																																																							"value": 6,
  																																																																							"type": "grey",
  																																																																							"level": "red",
  																																																																							"male": 6,
  																																																																							"female": 0,
  																																																																							"children": [{
  																																																																									"name": "Engineering Manager",
  																																																																									"value": 1,
  																																																																									"type": "grey",
  																																																																									"level": "red",
  																																																																									"male": 1,
  																																																																									"female": 0,

  																																																																								},
  																																																																								{
  																																																																									"name": "Product Manager",
  																																																																									"value": 1,
  																																																																									"type": "grey",
  																																																																									"level": "red",
  																																																																									"male": 1,
  																																																																									"female": 0,

  																																																																								},

  																																																																							]
  																																																																						},
  																																																																						{
  																																																																							"name": "Junior Level",
  																																																																							"value": 21,
  																																																																							"type": "grey",
  																																																																							"level": "red",
  																																																																							"male": 16,
  																																																																							"female": 5,
  																																																																							"children": [{
  																																																																									"name": "System Administrator",
  																																																																									"value": 1,
  																																																																									"type": "grey",
  																																																																									"level": "red",
  																																																																									"male": 1,
  																																																																									"female": 0,

  																																																																								},
  																																																																								{
  																																																																									"name": "Support Engineer",
  																																																																									"value": 1,
  																																																																									"type": "grey",
  																																																																									"level": "red",
  																																																																									"male": 1,
  																																																																									"female": 0,

  																																																																								},

  																																																																							]
  																																																																						},

  																																																																					]
  																																																																				},

  																																																																			]
  																																																																		},

  																																																																	]
  																																																																},

  																																																															]
  																																																														},

  																																																													]

  																																																												},
  																																																												{
  																																																													"name": "Support Engineer",
  																																																													"value": 1,
  																																																													"type": "grey",
  																																																													"level": "red",
  																																																													"male": 1,
  																																																													"female": 0,
  																																																													"children": [{
  																																																															"name": "Operation",
  																																																															"value": 40,
  																																																															"type": "black",
  																																																															"level": "green",
  																																																															"male": 23,
  																																																															"female": 17,

  																																																															"children": [{
  																																																																	"name": "Top Management",
  																																																																	"value": 3,
  																																																																	"type": "grey",
  																																																																	"level": "red",
  																																																																	"male": 3,
  																																																																	"female": 0,

  																																																																	"children": [{
  																																																																			"name": "Operation Manager",
  																																																																			"value": 1,
  																																																																			"type": "steelblue",
  																																																																			"level": "orange",
  																																																																			"male": 1,
  																																																																			"female": 0,

  																																																																		},
  																																																																		{
  																																																																			"name": "Account Strategist",
  																																																																			"value": 1,
  																																																																			"type": "steelblue",
  																																																																			"level": "red",
  																																																																			"male": 1,
  																																																																			"female": 0,

  																																																																		},

  																																																																	]
  																																																																},
  																																																																{
  																																																																	"name": "Junior Level",
  																																																																	"value": 23,
  																																																																	"type": "grey",
  																																																																	"level": "green",
  																																																																	"male": 10,
  																																																																	"female": 13,

  																																																																	"children": [{
  																																																																			"name": "Analyst",
  																																																																			"value": 10,
  																																																																			"type": "steelblue",
  																																																																			"level": "orange",
  																																																																			"male": 7,
  																																																																			"female": 3,

  																																																																			"children": [{
  																																																																					"name": "Top Management",
  																																																																					"value": 2,
  																																																																					"type": "black",
  																																																																					"level": "red",
  																																																																					"male": 2,
  																																																																					"female": 0,

  																																																																					"children": [{
  																																																																							"name": "Director",
  																																																																							"value": 1,
  																																																																							"type": "black",
  																																																																							"level": "red",
  																																																																							"male": 1,
  																																																																							"female": 0,

  																																																																						},
  																																																																						{
  																																																																							"name": "HR Manager",
  																																																																							"value": 1,
  																																																																							"type": "black",
  																																																																							"level": "red",
  																																																																							"male": 1,
  																																																																							"female": 0,

  																																																																						}
  																																																																					]
  																																																																				},
  																																																																				{
  																																																																					"name": "Middle Management",
  																																																																					"value": 1,
  																																																																					"type": "black",
  																																																																					"level": "red",
  																																																																					"male": 0,
  																																																																					"female": 1,
  																																																																					"children": [{
  																																																																						"name": "Front Office Executive",
  																																																																						"value": 1,
  																																																																						"type": "black",
  																																																																						"level": "red",
  																																																																						"male": 0,
  																																																																						"female": 1,
  																																																																						"children": [{
  																																																																								"name": "Operation",
  																																																																								"value": 40,
  																																																																								"type": "black",
  																																																																								"level": "green",
  																																																																								"male": 23,
  																																																																								"female": 17,

  																																																																								"children": [{
  																																																																										"name": "Top Management",
  																																																																										"value": 3,
  																																																																										"type": "grey",
  																																																																										"level": "red",
  																																																																										"male": 3,
  																																																																										"female": 0,

  																																																																										"children": [{
  																																																																												"name": "Operation Manager",
  																																																																												"value": 1,
  																																																																												"type": "steelblue",
  																																																																												"level": "orange",
  																																																																												"male": 1,
  																																																																												"female": 0,

  																																																																											},
  																																																																											{
  																																																																												"name": "Account Strategist",
  																																																																												"value": 1,
  																																																																												"type": "steelblue",
  																																																																												"level": "red",
  																																																																												"male": 1,
  																																																																												"female": 0,

  																																																																											},

  																																																																										]
  																																																																									},
  																																																																									{
  																																																																										"name": "Junior Level",
  																																																																										"value": 23,
  																																																																										"type": "grey",
  																																																																										"level": "green",
  																																																																										"male": 10,
  																																																																										"female": 13,

  																																																																										"children": [{
  																																																																												"name": "Analyst",
  																																																																												"value": 10,
  																																																																												"type": "steelblue",
  																																																																												"level": "orange",
  																																																																												"male": 7,
  																																																																												"female": 3,

  																																																																												"children": [{
  																																																																														"name": "Top Management",
  																																																																														"value": 2,
  																																																																														"type": "black",
  																																																																														"level": "red",
  																																																																														"male": 2,
  																																																																														"female": 0,

  																																																																														"children": [{
  																																																																																"name": "Director",
  																																																																																"value": 1,
  																																																																																"type": "black",
  																																																																																"level": "red",
  																																																																																"male": 1,
  																																																																																"female": 0,

  																																																																															},
  																																																																															{
  																																																																																"name": "HR Manager",
  																																																																																"value": 1,
  																																																																																"type": "black",
  																																																																																"level": "red",
  																																																																																"male": 1,
  																																																																																"female": 0,

  																																																																															}
  																																																																														]
  																																																																													},
  																																																																													{
  																																																																														"name": "Middle Management",
  																																																																														"value": 1,
  																																																																														"type": "black",
  																																																																														"level": "red",
  																																																																														"male": 0,
  																																																																														"female": 1,
  																																																																														"children": [{
  																																																																															"name": "Front Office Executive",
  																																																																															"value": 1,
  																																																																															"type": "black",
  																																																																															"level": "red",
  																																																																															"male": 0,
  																																																																															"female": 1,

  																																																																														}]
  																																																																													}
  																																																																												]

  																																																																											},
  																																																																											{
  																																																																												"name": "Intern",
  																																																																												"value": 5,
  																																																																												"type": "steelblue",
  																																																																												"level": "red",
  																																																																												"male": 0,
  																																																																												"female": 5,

  																																																																											},

  																																																																										]
  																																																																									},

  																																																																								]
  																																																																							},
  																																																																							{
  																																																																								"name": "Technology",
  																																																																								"value": 32,
  																																																																								"type": "black",
  																																																																								"level": "red",
  																																																																								"male": 26,
  																																																																								"female": 6,
  																																																																								"children": [{
  																																																																										"name": "Top Management",
  																																																																										"value": 6,
  																																																																										"type": "grey",
  																																																																										"level": "red",
  																																																																										"male": 6,
  																																																																										"female": 0,
  																																																																										"children": [{
  																																																																												"name": "Engineering Manager",
  																																																																												"value": 1,
  																																																																												"type": "grey",
  																																																																												"level": "red",
  																																																																												"male": 1,
  																																																																												"female": 0,

  																																																																											},
  																																																																											{
  																																																																												"name": "Product Manager",
  																																																																												"value": 1,
  																																																																												"type": "grey",
  																																																																												"level": "red",
  																																																																												"male": 1,
  																																																																												"female": 0,

  																																																																											},

  																																																																										]
  																																																																									},
  																																																																									{
  																																																																										"name": "Junior Level",
  																																																																										"value": 21,
  																																																																										"type": "grey",
  																																																																										"level": "red",
  																																																																										"male": 16,
  																																																																										"female": 5,
  																																																																										"children": [{
  																																																																												"name": "System Administrator",
  																																																																												"value": 1,
  																																																																												"type": "grey",
  																																																																												"level": "red",
  																																																																												"male": 1,
  																																																																												"female": 0,

  																																																																											},
  																																																																											{
  																																																																												"name": "Support Engineer",
  																																																																												"value": 1,
  																																																																												"type": "grey",
  																																																																												"level": "red",
  																																																																												"male": 1,
  																																																																												"female": 0,

  																																																																											},

  																																																																										]
  																																																																									},

  																																																																								]
  																																																																							},

  																																																																						]
  																																																																					}]
  																																																																				}
  																																																																			]

  																																																																		},
  																																																																		{
  																																																																			"name": "Intern",
  																																																																			"value": 5,
  																																																																			"type": "steelblue",
  																																																																			"level": "red",
  																																																																			"male": 0,
  																																																																			"female": 5,

  																																																																		},

  																																																																	]
  																																																																},

  																																																															]
  																																																														},
  																																																														{
  																																																															"name": "Technology",
  																																																															"value": 32,
  																																																															"type": "black",
  																																																															"level": "red",
  																																																															"male": 26,
  																																																															"female": 6,
  																																																															"children": [{
  																																																																	"name": "Top Management",
  																																																																	"value": 6,
  																																																																	"type": "grey",
  																																																																	"level": "red",
  																																																																	"male": 6,
  																																																																	"female": 0,
  																																																																	"children": [{
  																																																																			"name": "Engineering Manager",
  																																																																			"value": 1,
  																																																																			"type": "grey",
  																																																																			"level": "red",
  																																																																			"male": 1,
  																																																																			"female": 0,

  																																																																		},
  																																																																		{
  																																																																			"name": "Product Manager",
  																																																																			"value": 1,
  																																																																			"type": "grey",
  																																																																			"level": "red",
  																																																																			"male": 1,
  																																																																			"female": 0,

  																																																																		},

  																																																																	]
  																																																																},
  																																																																{
  																																																																	"name": "Junior Level",
  																																																																	"value": 21,
  																																																																	"type": "grey",
  																																																																	"level": "red",
  																																																																	"male": 16,
  																																																																	"female": 5,
  																																																																	"children": [{
  																																																																			"name": "System Administrator",
  																																																																			"value": 1,
  																																																																			"type": "grey",
  																																																																			"level": "red",
  																																																																			"male": 1,
  																																																																			"female": 0,
  																																																																			"children": [{
  																																																																					"name": "Operation",
  																																																																					"value": 40,
  																																																																					"type": "black",
  																																																																					"level": "green",
  																																																																					"male": 23,
  																																																																					"female": 17,

  																																																																					"children": [{
  																																																																							"name": "Top Management",
  																																																																							"value": 3,
  																																																																							"type": "grey",
  																																																																							"level": "red",
  																																																																							"male": 3,
  																																																																							"female": 0,

  																																																																							"children": [{
  																																																																									"name": "Operation Manager",
  																																																																									"value": 1,
  																																																																									"type": "steelblue",
  																																																																									"level": "orange",
  																																																																									"male": 1,
  																																																																									"female": 0,

  																																																																								},
  																																																																								{
  																																																																									"name": "Account Strategist",
  																																																																									"value": 1,
  																																																																									"type": "steelblue",
  																																																																									"level": "red",
  																																																																									"male": 1,
  																																																																									"female": 0,

  																																																																								},

  																																																																							]
  																																																																						},
  																																																																						{
  																																																																							"name": "Junior Level",
  																																																																							"value": 23,
  																																																																							"type": "grey",
  																																																																							"level": "green",
  																																																																							"male": 10,
  																																																																							"female": 13,

  																																																																							"children": [{
  																																																																									"name": "Analyst",
  																																																																									"value": 10,
  																																																																									"type": "steelblue",
  																																																																									"level": "orange",
  																																																																									"male": 7,
  																																																																									"female": 3,

  																																																																									"children": [{
  																																																																											"name": "Top Management",
  																																																																											"value": 2,
  																																																																											"type": "black",
  																																																																											"level": "red",
  																																																																											"male": 2,
  																																																																											"female": 0,

  																																																																											"children": [{
  																																																																													"name": "Director",
  																																																																													"value": 1,
  																																																																													"type": "black",
  																																																																													"level": "red",
  																																																																													"male": 1,
  																																																																													"female": 0,

  																																																																												},
  																																																																												{
  																																																																													"name": "HR Manager",
  																																																																													"value": 1,
  																																																																													"type": "black",
  																																																																													"level": "red",
  																																																																													"male": 1,
  																																																																													"female": 0,

  																																																																												}
  																																																																											]
  																																																																										},
  																																																																										{
  																																																																											"name": "Middle Management",
  																																																																											"value": 1,
  																																																																											"type": "black",
  																																																																											"level": "red",
  																																																																											"male": 0,
  																																																																											"female": 1,
  																																																																											"children": [{
  																																																																												"name": "Front Office Executive",
  																																																																												"value": 1,
  																																																																												"type": "black",
  																																																																												"level": "red",
  																																																																												"male": 0,
  																																																																												"female": 1,

  																																																																											}]
  																																																																										}
  																																																																									]

  																																																																								},
  																																																																								{
  																																																																									"name": "Intern",
  																																																																									"value": 5,
  																																																																									"type": "steelblue",
  																																																																									"level": "red",
  																																																																									"male": 0,
  																																																																									"female": 5,

  																																																																								},

  																																																																							]
  																																																																						},

  																																																																					]
  																																																																				},
  																																																																				{
  																																																																					"name": "Technology",
  																																																																					"value": 32,
  																																																																					"type": "black",
  																																																																					"level": "red",
  																																																																					"male": 26,
  																																																																					"female": 6,
  																																																																					"children": [{
  																																																																							"name": "Top Management",
  																																																																							"value": 6,
  																																																																							"type": "grey",
  																																																																							"level": "red",
  																																																																							"male": 6,
  																																																																							"female": 0,
  																																																																							"children": [{
  																																																																									"name": "Engineering Manager",
  																																																																									"value": 1,
  																																																																									"type": "grey",
  																																																																									"level": "red",
  																																																																									"male": 1,
  																																																																									"female": 0,

  																																																																								},
  																																																																								{
  																																																																									"name": "Product Manager",
  																																																																									"value": 1,
  																																																																									"type": "grey",
  																																																																									"level": "red",
  																																																																									"male": 1,
  																																																																									"female": 0,

  																																																																								},

  																																																																							]
  																																																																						},
  																																																																						{
  																																																																							"name": "Junior Level",
  																																																																							"value": 21,
  																																																																							"type": "grey",
  																																																																							"level": "red",
  																																																																							"male": 16,
  																																																																							"female": 5,
  																																																																							"children": [{
  																																																																									"name": "System Administrator",
  																																																																									"value": 1,
  																																																																									"type": "grey",
  																																																																									"level": "red",
  																																																																									"male": 1,
  																																																																									"female": 0,

  																																																																								},
  																																																																								{
  																																																																									"name": "Support Engineer",
  																																																																									"value": 1,
  																																																																									"type": "grey",
  																																																																									"level": "red",
  																																																																									"male": 1,
  																																																																									"female": 0,
  																																																																									"children": [{
  																																																																											"name": "Operation",
  																																																																											"value": 40,
  																																																																											"type": "black",
  																																																																											"level": "green",
  																																																																											"male": 23,
  																																																																											"female": 17,

  																																																																											"children": [{
  																																																																													"name": "Top Management",
  																																																																													"value": 3,
  																																																																													"type": "grey",
  																																																																													"level": "red",
  																																																																													"male": 3,
  																																																																													"female": 0,

  																																																																													"children": [{
  																																																																															"name": "Operation Manager",
  																																																																															"value": 1,
  																																																																															"type": "steelblue",
  																																																																															"level": "orange",
  																																																																															"male": 1,
  																																																																															"female": 0,

  																																																																														},
  																																																																														{
  																																																																															"name": "Account Strategist",
  																																																																															"value": 1,
  																																																																															"type": "steelblue",
  																																																																															"level": "red",
  																																																																															"male": 1,
  																																																																															"female": 0,

  																																																																														},

  																																																																													]
  																																																																												},
  																																																																												{
  																																																																													"name": "Junior Level",
  																																																																													"value": 23,
  																																																																													"type": "grey",
  																																																																													"level": "green",
  																																																																													"male": 10,
  																																																																													"female": 13,

  																																																																													"children": [{
  																																																																															"name": "Analyst",
  																																																																															"value": 10,
  																																																																															"type": "steelblue",
  																																																																															"level": "orange",
  																																																																															"male": 7,
  																																																																															"female": 3,

  																																																																															"children": [{
  																																																																																	"name": "Top Management",
  																																																																																	"value": 2,
  																																																																																	"type": "black",
  																																																																																	"level": "red",
  																																																																																	"male": 2,
  																																																																																	"female": 0,

  																																																																																	"children": [{
  																																																																																			"name": "Director",
  																																																																																			"value": 1,
  																																																																																			"type": "black",
  																																																																																			"level": "red",
  																																																																																			"male": 1,
  																																																																																			"female": 0,

  																																																																																		},
  																																																																																		{
  																																																																																			"name": "HR Manager",
  																																																																																			"value": 1,
  																																																																																			"type": "black",
  																																																																																			"level": "red",
  																																																																																			"male": 1,
  																																																																																			"female": 0,

  																																																																																		}
  																																																																																	]
  																																																																																},
  																																																																																{
  																																																																																	"name": "Middle Management",
  																																																																																	"value": 1,
  																																																																																	"type": "black",
  																																																																																	"level": "red",
  																																																																																	"male": 0,
  																																																																																	"female": 1,
  																																																																																	"children": [{
  																																																																																		"name": "Front Office Executive",
  																																																																																		"value": 1,
  																																																																																		"type": "black",
  																																																																																		"level": "red",
  																																																																																		"male": 0,
  																																																																																		"female": 1,

  																																																																																	}]
  																																																																																}
  																																																																															]

  																																																																														},
  																																																																														{
  																																																																															"name": "Intern",
  																																																																															"value": 5,
  																																																																															"type": "steelblue",
  																																																																															"level": "red",
  																																																																															"male": 0,
  																																																																															"female": 5,

  																																																																														},

  																																																																													]
  																																																																												},

  																																																																											]
  																																																																										},
  																																																																										{
  																																																																											"name": "Technology",
  																																																																											"value": 32,
  																																																																											"type": "black",
  																																																																											"level": "red",
  																																																																											"male": 26,
  																																																																											"female": 6,
  																																																																											"children": [{
  																																																																													"name": "Top Management",
  																																																																													"value": 6,
  																																																																													"type": "grey",
  																																																																													"level": "red",
  																																																																													"male": 6,
  																																																																													"female": 0,
  																																																																													"children": [{
  																																																																															"name": "Engineering Manager",
  																																																																															"value": 1,
  																																																																															"type": "grey",
  																																																																															"level": "red",
  																																																																															"male": 1,
  																																																																															"female": 0,

  																																																																														},
  																																																																														{
  																																																																															"name": "Product Manager",
  																																																																															"value": 1,
  																																																																															"type": "grey",
  																																																																															"level": "red",
  																																																																															"male": 1,
  																																																																															"female": 0,

  																																																																														},

  																																																																													]
  																																																																												},
  																																																																												{
  																																																																													"name": "Junior Level",
  																																																																													"value": 21,
  																																																																													"type": "grey",
  																																																																													"level": "red",
  																																																																													"male": 16,
  																																																																													"female": 5,
  																																																																													"children": [{
  																																																																															"name": "System Administrator",
  																																																																															"value": 1,
  																																																																															"type": "grey",
  																																																																															"level": "red",
  																																																																															"male": 1,
  																																																																															"female": 0,

  																																																																														},
  																																																																														{
  																																																																															"name": "Support Engineer",
  																																																																															"value": 1,
  																																																																															"type": "grey",
  																																																																															"level": "red",
  																																																																															"male": 1,
  																																																																															"female": 0,

  																																																																														},

  																																																																													]
  																																																																												},

  																																																																											]
  																																																																										},

  																																																																									]
  																																																																								},

  																																																																							]
  																																																																						},

  																																																																					]
  																																																																				},

  																																																																			]

  																																																																		},
  																																																																		{
  																																																																			"name": "Support Engineer",
  																																																																			"value": 1,
  																																																																			"type": "grey",
  																																																																			"level": "red",
  																																																																			"male": 1,
  																																																																			"female": 0,

  																																																																		},

  																																																																	]
  																																																																},

  																																																															]
  																																																														},

  																																																													]
  																																																												},

  																																																											]
  																																																										},

  																																																									]
  																																																								},

  																																																							]
  																																																						},

  																																																					]
  																																																				},

  																																																			]
  																																																		},

  																																																	]
  																																																},

  																																															]
  																																														},

  																																													]
  																																												},

  																																											]
  																																										},

  																																									]
  																																								},

  																																							]
  																																						},

  																																					]
  																																				},

  																																			]
  																																		},

  																																	]
  																																},

  																															]
  																														},

  																													]
  																												},

  																											]
  																										},

  																									]
  																								},

  																							]
  																						},

  																					]
  																				},

  																			]
  																		},

  																	]
  																},

  															]
  														},

  													]
  												},

  											]
  										},

  									]
  								},

  							]
  						},

  					]
  				},

  			]
  		},

  	]
  };


  ngOnInit(): void {
    const createChart = () => {
      const margin = { top: 20, right: 90, bottom: 30, left: 90 };
      const width = 960 - margin.left - margin.right;
      const height = 700 - margin.top - margin.bottom;

      this.treemap = d3.tree().size([height, width]).nodeSize([ 40, 40]);

      this.svg = d3
        .select('body')
        .append('svg')
        .attr('width', width + margin.right + margin.left)
        .attr('height', height + margin.top + margin.bottom)
        .call(
          d3.zoom().on('zoom', () => {
            this.svg.attr('transform', d3.event.transform);
          })
        )
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
        .attr("viewBox", "0 0 1300 3000")
      .classed("svg-content-responsive", true)
        ;

        this.zoomListener = d3.zoom().scaleExtent([0.1, 3]).on("zoom", () => {
          this.svg.attr('transform', d3.event.transform);
        });

      // Assigns parent, children, height, depth
      this.root = d3.hierarchy(this.treeData, (d: any) => {
        return d.children;
      });
      this.root.x0 = height / 2;
      this.root.y0 = 0;

      // this.root.children.forEach(element => {
      //   collapse(element);
      // });
    };

    const update = source => {
      // Assigns the x and y position for the nodes
      // tslint:disable-next-line:no-shadowed-variable
      const treeData = this.treemap(this.root);

      // Compute the new tree layout.
      const nodes = treeData.descendants();
      const links = treeData.descendants().slice(1);

      // Normalize for fixed-depth.
      nodes.forEach(d => {
        d.y = d.depth * 180;
      });

      // ****************** Nodes section ***************************

      // Update the nodes...
      const node = this.svg.selectAll('g.node').data(nodes, (d: any) => {
        return d.id || (d.id = ++this.i);
      });

      // Enter any new modes at the parent's previous position.
      const nodeEnter = node
        .enter()
        .append('g')
        .attr('class', 'node')
        .attr('transform', d => {
          return 'translate(' + source.y0 + ',' + source.x0 + ')';
        })
        .on('dblclick', click);

      // Add Circle for the nodes
      nodeEnter
        .append('circle')
        .attr('class', 'node')
        .attr('r', 1e-6)
        .style('fill', (d: any) => {
          return d._children ? 'red' : '#f00';
        });

      // Add labels for the nodes
      nodeEnter
        .append('text')
        .attr('dy', '.35em')
         .attr('x', (d: any) => {
          return d.children || d._children ? -40 : -40;
        })
        .attr('y', (d: any) => {
          return  -20;
        })
        .attr('text-anchor', (d: any) => {
          return d.children || d._children ? 'center' : 'center';
        })
        .text((d: any) => {
          return d.data.name;
        });

      // UPDATE
      const nodeUpdate = nodeEnter.merge(node);

      // Transition to the proper position for the node
      nodeUpdate
        .transition()
        .duration(this.duration)
        .attr('transform', d => {
          return 'translate(' + d.y + ',' + d.x + ')';
        });

      // Update the node attributes and style - red color circle
      nodeUpdate
        .select('circle.node')
        .attr('r', 10)
        .style('fill', (d: any) => {
          return d._children ? 'red' : '#f00';
        })
        .attr('cursor', 'pointer');

      // Remove any exiting nodes
      const nodeExit = node
        .exit()
        .transition()
        .duration(this.duration)
        .attr('transform', d => {
          return 'translate(' + source.y + ',' + source.x + ')';
        })
        .remove();

      // On exit reduce the node circles size to 0
      nodeExit.select('circle').attr('r', 1e-6);

      // On exit reduce the opacity of text labels
      nodeExit.select('text').style('fill-opacity', 1e-6);

      // ****************** links section ***************************

      // Update the links...
      const link = this.svg.selectAll('path.link').data(links, (d: any) => {
        return d.id;
      });

      // Enter any new links at the parent's previous position.
      const linkEnter = link
        .enter()
        .insert('path', 'g')
        .attr('class', 'link')
        .attr('d', d => {
          const o = { x: source.x0, y: source.y0 };
          return diagonal(o, o);
        })
        .style('fill', (d: any) => {
          return d.id ? 'none' : 'none';
        })
        .style('stroke', (d: any) => {
          return d.id ? 'blue' : '#00f';
        })
        .style('stroke-width', (d: any) => {
          return d.id ? '2px' : '2px';
        });

      // UPDATE
      const linkUpdate = linkEnter.merge(link);

      // Transition back to the parent element position
      linkUpdate
        .transition()
        .duration(this.duration)
        .attr('d', d => {
          return diagonal(d, d.parent);
        });

      // Remove any exiting links
      const linkExit = link
        .exit()
        .transition()
        .duration(this.duration)
        .attr('d', d => {
          const o = { x: source.x, y: source.y };
          return diagonal(o, o);
        })
        .remove();

      // Store the old positions for transition.
      nodes.forEach((d: any) => {
        d.x0 = d.x;
        d.y0 = d.y;
      });
    };

    const collapse = d => {
      if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
      }
    };

    const diagonal = (s, d) => {
      const path = `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`;

      return path;
    };

    const click = d => {
      if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
      update(d);
      centerNode(d);
    };

     const centerNode= source => {
      let t = d3.zoomTransform(this.svg.node());
      let x = -source.y0;
      let y = -source.x0;
        x = x * t.k + 960 / 2;
        y = y * t.k + 700 / 2;
      d3.select('svg').transition().duration(this.duration)
                                   .call( this.zoomListener.transform, d3.zoomIdentity.translate(x,y).scale(t.k) );

    };


    createChart();
    update(this.root);
    centerNode(this.root);
  }
}