angular.module('app', ["chart.js"])
     .config(['ChartJsProvider', function (ChartJsProvider) {
        // Configure all charts
        ChartJsProvider.setOptions({
          chartColors: ['#FF5252', '#FF8A80'],
          responsive: true
        });
        // Configure all line charts
        ChartJsProvider.setOptions('line', {
          showLines: false
        });
      }])
     

    .controller('TableController', [function() {
        var tc = this;
        
        

        
        tc.tableData = [{
                "X": 7,
                "Y": 5,
                "month": "mar",
                "day": "fri",
                "FFMC": 86.2,
                "DMC": 26.2,
                "DC": 94.3,
                "ISI": 5.1,
                "temp": 8.2,
                "RH": 51,
                "wind": 6.7,
                "rain": 0,
                "area": 10
            },
            {
                "X": 7,
                "Y": 4,
                "month": "oct",
                "day": "tue",
                "FFMC": 90.6,
                "DMC": 35.4,
                "DC": 669.1,
                "ISI": 6.7,
                "temp": 18,
                "RH": 33,
                "wind": 0.9,
                "rain": 0.4,
                "area": 20
            },
            {
                "X": 7,
                "Y": 4,
                "month": "oct",
                "day": "sat",
                "FFMC": 90.6,
                "DMC": 43.7,
                "DC": 686.9,
                "ISI": 6.7,
                "temp": 14.6,
                "RH": 33,
                "wind": 1.3,
                "rain": 0,
                "area": 0
            },
            {
                "X": 8,
                "Y": 6,
                "month": "mar",
                "day": "fri",
                "FFMC": 91.7,
                "DMC": 33.3,
                "DC": 77.5,
                "ISI": 9,
                "temp": 8.3,
                "RH": 97,
                "wind": 4,
                "rain": 0.2,
                "area": 0
            },
            {
                "X": 8,
                "Y": 6,
                "month": "mar",
                "day": "sun",
                "FFMC": 89.3,
                "DMC": 51.3,
                "DC": 102.2,
                "ISI": 9.6,
                "temp": 11.4,
                "RH": 99,
                "wind": 1.8,
                "rain": 0,
                "area": 0
            },
            {
                "X": 8,
                "Y": 6,
                "month": "aug",
                "day": "sun",
                "FFMC": 92.3,
                "DMC": 85.3,
                "DC": 488,
                "ISI": 14.7,
                "temp": 22.2,
                "RH": 29,
                "wind": 5.4,
                "rain": 0,
                "area": 0
            },
            {
                "X": 8,
                "Y": 6,
                "month": "aug",
                "day": "mon",
                "FFMC": 92.3,
                "DMC": 88.9,
                "DC": 495.6,
                "ISI": 8.5,
                "temp": 24.1,
                "RH": 27,
                "wind": 3.1,
                "rain": 0,
                "area": 0
            },
            {
                "X": 8,
                "Y": 6,
                "month": "aug",
                "day": "mon",
                "FFMC": 91.5,
                "DMC": 145.4,
                "DC": 608.2,
                "ISI": 10.7,
                "temp": 8,
                "RH": 86,
                "wind": 2.2,
                "rain": 0,
                "area": 0
            },
            {
                "X": 8,
                "Y": 6,
                "month": "sep",
                "day": "tue",
                "FFMC": 91,
                "DMC": 129.5,
                "DC": 692.6,
                "ISI": 7,
                "temp": 13.1,
                "RH": 63,
                "wind": 5.4,
                "rain": 0,
                "area": 0
            },
            {
                "X": 7,
                "Y": 5,
                "month": "sep",
                "day": "sat",
                "FFMC": 92.5,
                "DMC": 88,
                "DC": 698.6,
                "ISI": 7.1,
                "temp": 22.8,
                "RH": 40,
                "wind": 4,
                "rain": 0,
                "area": 0
            },
            {
                "X": 7,
                "Y": 5,
                "month": "sep",
                "day": "sat",
                "FFMC": 92.5,
                "DMC": 88,
                "DC": 698.6,
                "ISI": 7.1,
                "temp": 17.8,
                "RH": 51,
                "wind": 7.2,
                "rain": 0,
                "area": 0
            },
            {
                "X": 7,
                "Y": 5,
                "month": "sep",
                "day": "sat",
                "FFMC": 92.8,
                "DMC": 73.2,
                "DC": 713,
                "ISI": 22.6,
                "temp": 19.3,
                "RH": 38,
                "wind": 4,
                "rain": 0,
                "area": 0
            },
            {
                "X": 6,
                "Y": 5,
                "month": "aug",
                "day": "fri",
                "FFMC": 63.5,
                "DMC": 70.8,
                "DC": 665.3,
                "ISI": 0.8,
                "temp": 17,
                "RH": 72,
                "wind": 6.7,
                "rain": 0,
                "area": 0
            },
            {
                "X": 6,
                "Y": 5,
                "month": "sep",
                "day": "mon",
                "FFMC": 90.9,
                "DMC": 126.5,
                "DC": 686.5,
                "ISI": 7,
                "temp": 21.3,
                "RH": 42,
                "wind": 2.2,
                "rain": 0,
                "area": 0
            },
            {
                "X": 6,
                "Y": 5,
                "month": "sep",
                "day": "wed",
                "FFMC": 92.9,
                "DMC": 133.3,
                "DC": 699.6,
                "ISI": 9.2,
                "temp": 26.4,
                "RH": 21,
                "wind": 4.5,
                "rain": 0,
                "area": 0
            },
            {
                "X": 6,
                "Y": 5,
                "month": "sep",
                "day": "fri",
                "FFMC": 93.3,
                "DMC": 141.2,
                "DC": 713.9,
                "ISI": 13.9,
                "temp": 22.9,
                "RH": 44,
                "wind": 5.4,
                "rain": 0,
                "area": 0
            }
        ];



        tc.series = ['Series A'];

		 var data = d3.nest().key(function(d) {
                        return d["month"]
                    }).rollup(function(leaves) {
                        return leaves.length;
                    }).entries(tc.tableData);
                    
        var labels = []
        var values = []
        for (var i in data){
        	labels.push(data[i].key)
            values.push(data[i].value)
        }
        tc.labels = labels
        tc.data = [
	        values
        ];


        tc.dropdownToggles = {}
        tc.filtersSelected = {}


        tc.orderByKey = "day";
        tc.reverse = false
        tc.sortTableBy = function(key) {
            if (key === tc.orderByKey) {
                tc.reverse = !tc.reverse
            } else {
                tc.reverse = false
            }
            tc.orderByKey = key;
            tc.selectedRow = -1;
            tc.selectedRowObject = undefined;
        }

        tc.rowClicked = function(index, row) {
            if (tc.selectedRow === index) {
                tc.selectedRow = -1
                tc.selectedRowObject = undefined;
            } else {
                tc.selectedRow = index;
                tc.selectedRowObject = row;
            }
        }

        tc.filterBySelection = function() {
            return function(tablerow) {
                var res = true;
                for (var key in tc.filtersSelected) {
                    if (tc.filtersSelected.hasOwnProperty(key)) {
                        res = res && tc.filtersSelected[key].indexOf(tablerow[key]) != -1;
                    }

                    if (!res) {
                        return res;
                    }
                }

                return res;
            }

        }

        tc.selectFilter = function(key, value) {
            if (key in tc.filtersSelected) {
                tc.filtersSelected[key].push(value)
            } else {
                tc.filtersSelected[key] = [value]
            }
            var index = tc.dropdownToggles[key].indexOf(value);
            tc.dropdownToggles[key].splice(index, 1)
        }
        tc.removeFilter = function(key, value) {
            var index = tc.filtersSelected[key].indexOf(value);
            if (index != -1) {
                tc.filtersSelected[key].splice(index, 1);
            }

            if (tc.filtersSelected[key].length == 0) {
                delete tc.filtersSelected[key];
            }

            tc.dropdownToggles[key].push(value);
        }
        // private functions
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }
        var createDropDownData = function() {
            for (var i in tc.tableData) {
                var item = tc.tableData[i];
                for (var key in item) {
                    if (item.hasOwnProperty(key) && typeof item[key] === "string") {
                        if (key in tc.dropdownToggles) {
                            tc.dropdownToggles[key].push(item[key])
                        } else {
                            tc.dropdownToggles[key] = [item[key]]
                        }
                    }
                }
            }

            for (var key in tc.dropdownToggles) {
                if (tc.dropdownToggles.hasOwnProperty(key)) {
                    tc.dropdownToggles[key] = tc.dropdownToggles[key].filter(onlyUnique);
                }
            }
        }

        createDropDownData()

    }])

    .service("d3Service", [function() {
        var d3;

        return d3;

    }])

    .directive("barChart", ["d3Service", "$window", function(d3Service, $window) {
        return {
            restrict: "E",
            replace: true,
            template: "<div class='chart'></div>",
            scope: {
                data: "=",
                selectedRow: "=",
                orderBy: "="
            },
            link: function(scope, element, attrs) {
                var margin = {
                    top: 20,
                    right: 20,
                    bottom: 30,
                    left: 40
                };
                var orderBy = scope.orderBy;

                var color = d3.scaleOrdinal(d3.schemeCategory20);
                var width = $window.innerWidth - margin.left - margin.right;
                var height = 500 - margin.top - margin.bottom;
                if (typeof scope.data[0][orderBy] == "string") {
                    var data = d3.nest().key(function(d) {
                        return d[orderBy]
                    }).rollup(function(leaves) {
                        return leaves.length;
                    }).entries(scope.data);
                }
                var svg = d3.select(element[0])
                    .append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform",
                        "translate(" + margin.left + "," + margin.top + ")");
                svg.selectAll('*').remove();

                var x = d3.scaleBand().range([0, width]).padding(0.1);

                var y = d3.scaleLinear().range([height, 0]);

                var xAxis = d3.axisBottom(x)


                var yAxis = d3.axisLeft(y)


                x.domain(data.map(function(d) {
                    return d.key;
                }));
                y.domain([0, d3.max(data, function(d) {
                    return d.value;
                })]);


                var bars = svg.selectAll(".bar").data(data)
                bars = bars.enter()
                    .append("rect")
                bars
                    .attr("x", function(d) {
                        return x(d.key)
                    })
                    .attr("width", x.bandwidth())
                    .attr("y", function(d) {
                        return y(d.value)
                    })
                    .attr("height", function(d) {
                        return height - y(d.value)
                    })
                    .attr("fill", function(d) {
                        return color(0)
                    })
                bars.exit()
                    .remove()



                svg.append("g")
                    .attr("transform", "translate(0," + height + ")")
                    .call(xAxis);

                svg.append("g")
                    .call(yAxis);

                scope.$watch("selectedRow", function(val) {
                    bars.attr("fill", function(d) {
                        if (val === undefined || d.key === val[orderBy]) {
                            return color(0)
                        }
                        return color(20)

                    })
                })

            }
        }
    }]);


setTimeout(function() {
    angular.bootstrap(document.getElementById('body'), ['app']);
});



// ---SPECS-------------------------

describe('app', function() {
    describe('TableController', function() {
        beforeEach(function() {
            module('app');
        });
        var $controller;

        beforeEach(inject(function(_$controller_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $controller = _$controller_('TableController');
        }));
        it('has the tableData', function() {
            expect($controller.tableData).toBeDefined();
        });

        it('defaults the sorting order to day column', function() {
            expect($controller.orderByKey).toBe('day')

        })
        it('defaults the sorting order to ascending', function() {
            expect($controller.reverse).toBe(false)
        })
        it('flips acending to descending if "sortTableBy" called using same key', function() {
            $controller.sortTableBy('day')
            expect($controller.reverse).toBe(true)
            expect($controller.orderByKey).toBe('day')
            $controller.sortTableBy('day')
            expect($controller.reverse).toBe(false)
            expect($controller.orderByKey).toBe('day')
        })
        it("clears the selectedRow and selectedRowObject when click on columns to sort", function() {
            $controller.selectedRow = 2
            $controller.selectedRowObject = $controller.tableData[2]
            expect($controller.selectedRow).toBe(2)

            $controller.sortTableBy('day')
            expect($controller.selectedRow).toBe(-1)
            expect($controller.selectedRowObject).toBeUndefined();
        })

        it("on calling row click, assign selectedRow and selectedRowObj variables", function() {
            $controller.rowClicked(1, $controller.tableData[1])

            expect($controller.selectedRow).toBe(1)
            expect($controller.selectedRowObject).toBe($controller.tableData[1])
        })
        it("should remove selected row if same index is passed, i.e same row is clicked", function() {
            $controller.rowClicked(1, $controller.tableData[1])
            $controller.rowClicked(1, $controller.tableData[1])
            expect($controller.selectedRow).toBe(-1)
            expect($controller.selectedRowObject).toBeUndefined();
        })
    })


    describe("Bar Chart Directive", function() {
        var $compile,
            $rootScope,
            directiveElement;

        beforeEach(module('app'));
        beforeEach(inject(function(_$compile_, _$rootScope_) {

            $compile = _$compile_;
            $rootScope = _$rootScope_.$new();
            $rootScope.data = [{
                "X": 6,
                "Y": 5,
                "month": "sep",
                "day": "fri",
                "FFMC": 93.3,
                "DMC": 141.2,
                "DC": 713.9,
                "ISI": 13.9,
                "temp": 22.9,
                "RH": 44,
                "wind": 5.4,
                "rain": 0,
                "area": 0
            }]
            $rootScope.selectedRow = undefined
            $rootScope.orderBy = 'day'
            var element = angular.element('<bar-chart data="data" selected-row="selectedRow" order-by="orderBy"></bar-chart>');
            directiveElement = $compile(element)($rootScope);
            $rootScope.$digest();
        }));

        it("should have a div with class 'chart'", function() {
            var divEle = directiveElement.find("div.chart")
            expect(divEle).toBeDefined()
        })

        it("should have svg element", function() {
            var svgElem = directiveElement.find("svg")
            expect(svgElem).toBeDefined()
        })

        it("should have exactly one rect i.e one vertical bar", function() {
            var barElements = directiveElement.children("rect")
            expect(barElements.length).toBe(1)
        })
        it("the bar should have default color", function() {
            var barEle = directiveElement.find("rect")
            expect(barEle.attr("fill"), "#1f77b4");

        })
        it("should change color when row is selected", function() {
            $rootScope.selectedRow = {
                "X": 6,
                "Y": 5,
                "month": "sep",
                "day": "mon",
                "FFMC": 93.3,
                "DMC": 141.2,
                "DC": 713.9,
                "ISI": 13.9,
                "temp": 22.9,
                "RH": 44,
                "wind": 5.4,
                "rain": 0,
                "area": 0
            }
            $rootScope.$digest()
            var barEle = directiveElement.find("rect")
            expect(barEle.attr("fill"), "#aec7e8");
        })

    })

});

// --- Runner -------------------------
(function() {
    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var htmlReporter = new jasmine.HtmlReporter();

    jasmineEnv.addReporter(htmlReporter);

    jasmineEnv.specFilter = function(spec) {
        return htmlReporter.specFilter(spec);
    };

    var currentWindowOnload = window.onload;
    execJasmine();
    window.onload = function() {
        if (currentWindowOnload) {
            currentWindowOnload();
        }
        execJasmine();
    };

    function execJasmine() {
        jasmineEnv.execute();
    }

})();
