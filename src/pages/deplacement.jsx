<Header userName={userMainDatas.userInfos.firstName} />

<div className="graphsAndDailyContainer">
  <section className="graphsContainer">
    <div className="dailyActivity">
      {userActivity ? <BarGraph activity={userActivity} /> : null}
    </div>
    <div className="otherGraph">
      <div className="averageSessions">
        <p className="pDescription">
          Durée moyenne des <br />
          sessions
        </p>
        {userAverageSessions ? (
          <LineGraph average={userAverageSessions} />
        ) : null}
      </div>
      <div className="performances">
        {userPerformance ? (
          <RadarGraph performances={userPerformance} />
        ) : null}
      </div>
      <div className="score">
        <p className="pScore">Score</p>
        <div className="radarBarChart">
          <SimpleRadialBarChart
            userMainDatas={userMainDatas}
            className="radar"
          />
          <div className="userObjectif">
            <p className="percent">
              {' '}
              {userMainDatas.scores[1].score}%
            </p>
            <p>
              de votre <br />
              objectif
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <aside className="dailyIntake">
    <CardInfo
      icone={flammeRouge}
      number={userMainDatas.keyData.calorieCount}
      unit={'kCal'}
      type={'Calories'}
    />
    <CardInfo
      icone={chicken}
      number={userMainDatas.keyData.proteinCount}
      unit={'g'}
      type={'Protéines'}
    />
    <CardInfo
      icone={apple}
      number={userMainDatas.keyData.carbohydrateCount}
      unit={'g'}
      type={'Glucides'}
    />
    <CardInfo
      icone={burger}
      number={userMainDatas.keyData.lipidCount}
      unit={'g'}
      type={'Lipides'}
    />
  </aside>
</div>